/**
 * Search utilities for content discovery
 */

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  roadmap: string;
  level: number;
  url: string;
}

// Static search index - can be loaded from MDX frontmatter in future
export const SEARCH_INDEX: SearchItem[] = [
  // C Roadmap
  { id: 'c-basics', title: 'C Basics', description: 'Introduction to C programming', roadmap: 'C', level: 1, url: '/c-roadmap#c-basics' },
  { id: 'c-types', title: 'Data Types', description: 'Primitive data types in C', roadmap: 'C', level: 1, url: '/c-roadmap#c-types' },
  { id: 'c-functions', title: 'Functions', description: 'Function declaration and definition', roadmap: 'C', level: 2, url: '/c-roadmap#c-functions' },
  { id: 'c-pointers', title: 'Pointers', description: 'Memory management with pointers', roadmap: 'C', level: 3, url: '/c-roadmap#c-pointers' },
  { id: 'c-structs', title: 'Structs', description: 'Defining complex data structures', roadmap: 'C', level: 3, url: '/c-roadmap#c-structs' },
  { id: 'c-io', title: 'File I/O', description: 'Reading and writing files', roadmap: 'C', level: 4, url: '/c-roadmap#c-io' },
  
  // Git Roadmap
  { id: 'git-setup', title: 'Setup', description: 'Installation and configuration', roadmap: 'Git', level: 1, url: '/git-roadmap#git-setup' },
  { id: 'git-basics', title: 'Basics', description: 'Add, commit, and push', roadmap: 'Git', level: 1, url: '/git-roadmap#git-basics' },
  { id: 'git-branching', title: 'Branching', description: 'Create and merge branches', roadmap: 'Git', level: 2, url: '/git-roadmap#git-branching' },
  { id: 'git-rebasing', title: 'Rebasing', description: 'Rebase vs merge strategies', roadmap: 'Git', level: 3, url: '/git-roadmap#git-rebasing' },
  { id: 'git-advanced', title: 'Advanced', description: 'Cherry-pick, stash, tags', roadmap: 'Git', level: 4, url: '/git-roadmap#git-advanced' },
  
  // Vim Roadmap
  { id: 'vim-basics', title: 'Basic Navigation', description: 'hjkl movement and modes', roadmap: 'Vim', level: 1, url: '/vim-roadmap#vim-basics' },
  { id: 'vim-editing', title: 'Editing', description: 'Insert, modify, and delete text', roadmap: 'Vim', level: 1, url: '/vim-roadmap#vim-editing' },
  { id: 'vim-search', title: 'Search', description: 'Finding and replacing text', roadmap: 'Vim', level: 2, url: '/vim-roadmap#vim-search' },
  { id: 'vim-advanced', title: 'Advanced', description: 'Macros, registers, and plugins', roadmap: 'Vim', level: 3, url: '/vim-roadmap#vim-advanced' },
  
  // Linux Roadmap
  { id: 'linux-shell', title: 'Shell Basics', description: 'Command line fundamentals', roadmap: 'Linux', level: 1, url: '/linux-roadmap#linux-shell' },
  { id: 'linux-files', title: 'File System', description: 'Navigation and permissions', roadmap: 'Linux', level: 1, url: '/linux-roadmap#linux-files' },
  { id: 'linux-users', title: 'User Management', description: 'Users, groups, and sudo', roadmap: 'Linux', level: 2, url: '/linux-roadmap#linux-users' },
  { id: 'linux-services', title: 'Services', description: 'systemd and daemons', roadmap: 'Linux', level: 3, url: '/linux-roadmap#linux-services' },
];

export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return [];
  
  const q = query.toLowerCase();
  return SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.roadmap.toLowerCase().includes(q)
  ).sort((a, b) => {
    // Prioritize exact title match
    const aExact = a.title.toLowerCase() === q;
    const bExact = b.title.toLowerCase() === q;
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;
    
    // Then by roadmap match frequency
    const aRoadmap = a.roadmap.toLowerCase().startsWith(q);
    const bRoadmap = b.roadmap.toLowerCase().startsWith(q);
    if (aRoadmap && !bRoadmap) return -1;
    if (!aRoadmap && bRoadmap) return 1;
    
    // Then by level (easier first)
    return a.level - b.level;
  });
}

export function getSearchIndex(): SearchItem[] {
  return SEARCH_INDEX;
}

export function groupByRoadmap(items: SearchItem[]): { [roadmap: string]: SearchItem[] } {
  return items.reduce((acc, item) => {
    if (!acc[item.roadmap]) acc[item.roadmap] = [];
    acc[item.roadmap].push(item);
    return acc;
  }, {} as { [roadmap: string]: SearchItem[] });
}
