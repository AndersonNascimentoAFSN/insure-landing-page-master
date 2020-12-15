// const btnMobile = document.querySelector('.btn-hamburger');
// const menuHeader = document.querySelector('.nav-header');

// function btnMobileHandle(e) {
//   btnMobile.classList.toggle('show');
//   menuHeader.classList.toggle('showMenu');
// } 
// btnMobile.addEventListener('click', btnMobileHandle);


const $headerMenu = document.querySelector('.headerMenu');
const $headerBtnMenuOpen = document.querySelector('.headerBtnMenu-open');
const $headerBtnMenuClose = document.querySelector('.headerBtnMenu-close');

$headerBtnMenuOpen.addEventListener('click', function() {
  $headerMenu.classList.add('menuHeader-open');
});

$headerBtnMenuClose.addEventListener('click', function() {
  $headerMenu.classList.remove('menuHeader-open');
});