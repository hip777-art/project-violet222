let a = document.getElementById('mobile-menu-is-open');
let b = document.getElementById('mobile-menu');
let c = document.getElementById('mobile-menu-close');

a.addEventListener('click', e => {
  b.classList.toggle('is-open');
});
c.addEventListener('click', e => {
  b.classList.toggle('is-open');
});