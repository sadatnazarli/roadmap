import { useEffect, useRef, useState } from 'react';

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Extract headings from page
    const headingElements = document.querySelectorAll('main h2, main h3, main h4');
    const headingList = Array.from(headingElements)
      .filter((el) => el.id) // Only include headings with IDs
      .map((el) => ({
        id: el.id,
        title: el.textContent,
        level: parseInt(el.tagName[1]),
      }));

    setHeadings(headingList);

    // Set up Intersection Observer for scrollspy
    if (headingList.length > 0) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          // Find the first heading that's in viewport
          const visibleEntry = entries.find((entry) => entry.isIntersecting);
          if (visibleEntry) {
            setActiveId(visibleEntry.target.id);
          }
        },
        {
          rootMargin: '-64px 0px -66% 0px',
        }
      );

      headingList.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observerRef.current.observe(element);
        }
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleClick = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  // Build nested structure
  const buildTree = () => {
    const tree = [];
    let currentRoot = null;
    let currentLevel2 = null;

    headings.forEach((heading) => {
      if (heading.level === 2) {
        currentRoot = { ...heading, children: [] };
        currentLevel2 = null;
        tree.push(currentRoot);
      } else if (heading.level === 3 && currentRoot) {
        currentLevel2 = { ...heading, children: [] };
        currentRoot.children.push(currentLevel2);
      } else if (heading.level === 4 && currentLevel2) {
        currentLevel2.children.push(heading);
      } else if (heading.level === 4 && currentRoot && !currentLevel2) {
        currentRoot.children.push(heading);
      }
    });

    return tree;
  };

  const tree = buildTree();

  return (
    <nav className="hidden xl:block fixed right-4 top-24 w-48 max-h-[calc(100vh-200px)] overflow-y-auto">
      <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-4">
        Bu Səhifədə
      </div>
      <ul className="space-y-2 text-sm">
        {tree.map((h2) => (
          <li key={h2.id}>
            <a
              href={`#${h2.id}`}
              onClick={(e) => handleClick(h2.id, e)}
              className={`block py-1 px-3 rounded transition-colors ${
                activeId === h2.id
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {h2.title}
            </a>
            {h2.children.length > 0 && (
              <ul className="mt-1 ml-2 space-y-1 border-l border-gray-200 dark:border-slate-700 pl-3">
                {h2.children.map((h3) => (
                  <li key={h3.id}>
                    <a
                      href={`#${h3.id}`}
                      onClick={(e) => handleClick(h3.id, e)}
                      className={`block py-0.5 px-2 rounded text-xs transition-colors ${
                        activeId === h3.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 font-semibold'
                          : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {h3.title}
                    </a>
                    {h3.children && h3.children.length > 0 && (
                      <ul className="mt-0.5 ml-2 space-y-0.5 border-l border-gray-200 dark:border-slate-700 pl-2">
                        {h3.children.map((h4) => (
                          <li key={h4.id}>
                            <a
                              href={`#${h4.id}`}
                              onClick={(e) => handleClick(h4.id, e)}
                              className={`block py-0.5 px-1.5 rounded text-xs transition-colors ${
                                activeId === h4.id
                                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300'
                                  : 'text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400'
                              }`}
                            >
                              {h4.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
