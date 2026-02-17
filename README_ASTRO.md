# Astro Roadmap Website

Proqramlaşdırma roadmaplarını modern web interfaceində görüntülə.

## Xüsusiyyətlər

- 🚀 Astro framework ilə super sürətli website
- 🎨 Tailwind CSS ilə güzel dizayn
- 📝 MDX format ilə markdown + React komponenti desteği
- 📱 Mobile-friendly responsive design
- 🌙 Modern gradient rəngləri
- ✨ Smooth scroll və animasiyalar

## Roadmaplar

### 1. C Proqramlaşdırma Dili 🚀
Sıfırdan Master səviyyəyə qədər tam C dili roadmap-ı:
- Level 0-5: Başlanğıcdan ustalaşmağa qədər
- Praktiki məşqlər
- Code nümunələri

### 2. Vim Editor 🎯
Modal text editor Vim-in sıfırdan master bələdçisi:
- Level 0-5: Quraşdırmadan master olmağa qədər
- Keyboard shortcuts
- Advanced techniques

## Quraşdırma

### Tələblər
- Node.js 16.12.0 və ya yuxarı

### İnstallasiya

\`\`\`bash
# Bağlılıqları quraşdır
npm install

# Geliştirmə serverini başlat
npm run dev

# Production üçün build et
npm run build

# Build-ı önizlə
npm run preview
\`\`\`

## Faylların Strukturu

\`\`\`
src/
├── pages/
│   ├── index.astro          # Ana səhifə
│   ├── c-roadmap.mdx        # C Roadmap
│   └── vim-roadmap.mdx      # Vim Roadmap
├── layouts/
│   └── BaseLayout.astro     # Əsas layout
├── components/
└── styles/
    └── global.css           # Global stiller
\`\`\`

## Açılış

Geliştirmə serverini başlatdıqdan sonra:
\`\`\`
http://localhost:3000
\`\`\`

## Texnoloji Stack

- **Astro** - Static Site Generator
- **React** - Komponenti library
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Type safety
- **MDX** - Markdown + JSX

## Development

### Yeni səhifə əlavə etmək

\`src/pages/\` qovluğuna yeni \`.mdx\` faylı yaradın:

\`\`\`mdx
---
layout: ../layouts/BaseLayout.astro
title: "Səhifə Başlığı"
---

<div class="max-w-4xl mx-auto px-4">
  # Salam! 👋
  
  Burada mətnin və komponenti birləşdirə bilirsiniz.
</div>
\`\`\`

### Stil dəyişmələri

Tailwind CSS-i \`src/styles/global.css\` və \`tailwind.config.mjs\` vasitəsilə fərdiləşdirin.

## İnspirasiya

Bu roadmaplar başlayanlar üçün strukturlaşdırılmış öyrənmə yolu təmin etmişdir. Əsasdan qabaqcıl konseptlərə doğru addım-addım irəliləyin!

---

**Yaradılış Tarixi**: 2026
**Versiya**: 1.0.0
