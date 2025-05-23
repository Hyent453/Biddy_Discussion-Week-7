function toggleTheme() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();
  if (currentBg === '#f0faff') {
    root.style.setProperty('--bg-color', '#1a1a1a');
    root.style.setProperty('--text-color', '#f0f0f0');
    root.style.setProperty('--accent-color', '#ffd166');
  } else {
    root.style.setProperty('--bg-color', '#f0faff');
    root.style.setProperty('--text-color', '#2a2a2a');
    root.style.setProperty('--accent-color', '#00b4d8');
  }
}
