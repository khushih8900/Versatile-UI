const list = document.querySelectorAll('.list ');

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));
/  menu bar click/ 
const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');

menuIcon.addEventListener('click', function () {
  nav.classList.toggle('active');
});