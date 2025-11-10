// Simple interactivity
const colorBtn = document.getElementById('colorBtn');
const colors = ['#f8f9fa', '#ffe4e1', '#e0f7fa', '#fff3cd', '#e6e6fa'];

colorBtn.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
