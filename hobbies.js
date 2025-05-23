// Create the dancing name effect dynamically
const name = "Biddy Mwendar";
const nameContainer = document.getElementById("dancing-name");
nameContainer.innerHTML = '';
[...name].forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${i * 0.15}s`;
  nameContainer.appendChild(span);
});

// Theme toggler
function toggleTheme() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();
  if (currentBg === '#fffdf7') {
    root.style.setProperty('--bg-color', '#1a1a1a');
    root.style.setProperty('--text-color', '#f1f1f1');
    root.style.setProperty('--accent-color', '#06d6a0');
  } else {
    root.style.setProperty('--bg-color', '#fffdf7');
    root.style.setProperty('--text-color', '#1f1f1f');
    root.style.setProperty('--accent-color', '#ff6f61');
  }
}
