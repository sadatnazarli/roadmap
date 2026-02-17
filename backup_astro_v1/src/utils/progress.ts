/**
 * Progress tracking utilities for localStorage
 */

interface ProgressMap {
  [sectionId: string]: boolean;
}

const PROGRESS_PREFIX = 'devmaps_progress_';

export function getProgress(roadmapSlug: string): ProgressMap {
  if (typeof localStorage === 'undefined') return {};
  
  const keys = Object.keys(localStorage);
  const prefix = `${PROGRESS_PREFIX}${roadmapSlug}_`;
  const progress: ProgressMap = {};
  
  keys.forEach(key => {
    if (key.startsWith(prefix)) {
      const sectionId = key.replace(prefix, '');
      progress[sectionId] = localStorage.getItem(key) === 'true';
    }
  });
  
  return progress;
}

export function setProgress(roadmapSlug: string, sectionId: string, done: boolean): void {
  if (typeof localStorage === 'undefined') return;
  
  const key = `${PROGRESS_PREFIX}${roadmapSlug}_${sectionId}`;
  localStorage.setItem(key, done ? 'true' : 'false');
}

export function resetProgress(roadmapSlug: string): void {
  if (typeof localStorage === 'undefined') return;
  
  const keys = Object.keys(localStorage);
  const prefix = `${PROGRESS_PREFIX}${roadmapSlug}_`;
  
  keys.forEach(key => {
    if (key.startsWith(prefix)) {
      localStorage.removeItem(key);
    }
  });
}

export function getCompletionPercent(roadmapSlug: string, totalSections: number): number {
  const progress = getProgress(roadmapSlug);
  const completed = Object.values(progress).filter(Boolean).length;
  
  if (totalSections === 0) return 0;
  return Math.round((completed / totalSections) * 100);
}

export function getAllProgress(): { [roadmapSlug: string]: number } {
  if (typeof localStorage === 'undefined') return {};
  
  const roadmaps = ['c', 'git', 'vim', 'linux'];
  const result: { [roadmapSlug: string]: number } = {};
  
  roadmaps.forEach(roadmap => {
    const progress = getProgress(roadmap);
    const sections = Object.values(progress).filter(Boolean).length;
    const total = Object.values(progress).length;
    result[roadmap] = total > 0 ? Math.round((sections / total) * 100) : 0;
  });
  
  return result;
}
