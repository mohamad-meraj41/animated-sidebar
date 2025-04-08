const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  content.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  content.classList.remove('active');
});