import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');
const dataDir = path.join(__dirname, '../src/data');

function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/[^\w\süöğıəşç-]/g, '') // Remove all non-word chars (except AZ letters and spaces/hyphens)
        .trim()
        .replace(/\s+/g, '-')            // Replace spaces with hyphens
        .replace(/-+/g, '-');            // Replace multiple hyphens with single hyphen
}

const roadmaps = [
    { file: 'c-roadmap.mdx', name: 'C', slug: 'c' },
    { file: 'git-roadmap.mdx', name: 'Git', slug: 'git' },
    { file: 'linux-roadmap.mdx', name: 'Linux', slug: 'linux' },
    { file: 'vim-roadmap.mdx', name: 'Vim', slug: 'vim' },
    { file: 'ai-roadmap.mdx', name: 'AI Mühəndisi', slug: 'ai' },
];

const searchIndex = [];

roadmaps.forEach(roadmap => {
    const filePath = path.join(pagesDir, roadmap.file);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    let currentLevel = 0;

    lines.forEach(line => {
        const levelMatch = line.match(/^##?\s*Level\s*(\d+)/i);
        if (levelMatch) {
            currentLevel = parseInt(levelMatch[1]);
        }

        // Match headings but ignore React components
        const headingMatch = line.match(/^(##|###)\s+(.+)$/);

        if (headingMatch && !line.includes('<')) {
            let headingText = headingMatch[2].trim();
            // Remove common roadmap emojis
            const cleanText = headingText.replace(/[🔰🏆🤖💻🗣️🧑‍💻🐛🔨🏗️🚨🛠️]/g, '').trim();
            const id = `${roadmap.slug}-${slugify(cleanText)}`;
            const url = `/${roadmap.slug}#${slugify(cleanText)}`;

            if (cleanText.length > 2) {
                searchIndex.push({
                    id: id,
                    title: cleanText,
                    roadmap: roadmap.name,
                    level: currentLevel,
                    url: url
                });
            }
        }
    });
});

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(path.join(dataDir, 'searchIndex.json'), JSON.stringify(searchIndex, null, 2));

console.log(`✅ Uğurla ${searchIndex.length} axtarış nəticəsi yaradıldı: src/data/searchIndex.json`);
