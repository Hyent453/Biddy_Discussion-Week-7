// Dancing effect for each letter
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("name-header");
  const name = header.textContent.trim();
  header.innerHTML = ""; // Clear original
  [...name].forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    header.appendChild(span);
  });
});

// Dark/light theme toggle
function toggleTheme() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();
  if (currentBg === "#121212") {
    root.style.setProperty('--bg-color', '#fdf6ec');
    root.style.setProperty('--text-color', '#333');
    root.style.setProperty('--accent-color', '#3a86ff');
    root.style.setProperty('--secondary-color', '#ffbe0b');
  } else {
    root.style.setProperty('--bg-color', '#121212');
    root.style.setProperty('--text-color', '#f0f0f0');
    root.style.setProperty('--accent-color', '#8ecae6');
    root.style.setProperty('--secondary-color', '#ffb703');
  }
}
