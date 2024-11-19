export type Theme = 'shadow' | 'sonic-classic' | 'sonic-modern' | 'green-hill';

const DEFAULT_THEME: Theme = 'shadow';

export const themes: Theme[] = [
  DEFAULT_THEME,
  'sonic-classic',
  'sonic-modern',
  'green-hill',
];

export function setTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

export function getTheme(): Theme {
  const savedTheme = localStorage.getItem('theme') as Theme;
  return savedTheme || DEFAULT_THEME;
}

export function initTheme() {
  const theme = getTheme();
  setTheme(theme);
}

export function cycleTheme() {
  const currentTheme = getTheme();
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;
  setTheme(themes[nextIndex]);
}
