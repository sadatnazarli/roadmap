/**
 * Table of Contents generation and management utilities
 */

export interface TOCItem {
  id: string;
  title: string;
  level: number;
  children?: TOCItem[];
}

/**
 * Extract headings from HTML and build nested TOC structure
 */
export function extractHeadings(html: string): TOCItem[] {
  if (typeof document === 'undefined') return []; // SSR safety
  
  // Create a temporary container and parse HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Extract h2, h3, h4 elements
  const headings = doc.querySelectorAll('h2, h3, h4');
  const items: TOCItem[] = [];
  const stack: TOCItem[] = [];
  
  headings.forEach(heading => {
    const level = parseInt(heading.tagName[1]); // h2 -> 2, h3 -> 3, etc.
    const id = heading.id || heading.textContent?.replace(/\s+/g, '-').toLowerCase() || '';
    const title = heading.textContent || '';
    
    const item: TOCItem = { id, title, level };
    
    // Add to stack based on level
    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }
    
    if (stack.length === 0) {
      items.push(item);
    } else {
      const parent = stack[stack.length - 1];
      if (!parent.children) parent.children = [];
      parent.children.push(item);
    }
    
    stack.push(item);
  });
  
  return items;
}

/**
 * Extract headings from DOM (use in browser, not SSR)
 */
export function extractHeadingsFromDOM(mainElement: HTMLElement): TOCItem[] {
  const headings = mainElement.querySelectorAll('h2, h3, h4');
  const items: TOCItem[] = [];
  const stack: TOCItem[] = [];
  
  headings.forEach(heading => {
    const level = parseInt(heading.tagName[1]);
    const id = heading.id;
    const title = heading.textContent || '';
    
    const item: TOCItem = { id, title, level };
    
    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }
    
    if (stack.length === 0) {
      items.push(item);
    } else {
      const parent = stack[stack.length - 1];
      if (!parent.children) parent.children = [];
      parent.children.push(item);
    }
    
    stack.push(item);
  });
  
  return items;
}

/**
 * Flatten nested TOC structure to array
 */
export function flattenTOC(items: TOCItem[]): TOCItem[] {
  const result: TOCItem[] = [];
  
  function flatten(item: TOCItem) {
    result.push(item);
    if (item.children) {
      item.children.forEach(flatten);
    }
  }
  
  items.forEach(flatten);
  return result;
}

/**
 * Find active item based on scroll position
 */
export function findActiveItem(items: TOCItem[], activeId: string): TOCItem | null {
  const flat = flattenTOC(items);
  return flat.find(item => item.id === activeId) || null;
}

/**
 * Generate anchor links from TOC
 */
export function generateAnchors(items: TOCItem[]): { id: string; href: string }[] {
  const flat = flattenTOC(items);
  return flat.map(item => ({
    id: item.id,
    href: `#${item.id}`,
  }));
}
