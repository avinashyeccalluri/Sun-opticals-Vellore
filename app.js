var mainNav = document.getElementById('main-nav');
document.addEventListener('click', function(event) {
  if (!event.target.matches('.nav-menu')) return;
  mainNav.classList.toggle('nav-open');
});