// Dancing letters effect for the header name "Biddy Mwendar"
const nameHeader = document.getElementById('name-header');
const nameText = nameHeader.textContent.trim();
nameHeader.textContent = '';

for (let i = 0; i < nameText.length; i++) {
  const span = document.createElement('span');
  span.textContent = nameText[i];
  span.style.setProperty('--i', i);
  nameHeader.appendChild(span);
}
