//get open and close buttons
const openBtn = document.querySelector('.navbar-toggle');
const closeBtn = document.querySelector('.side-toggle');

//get navigations, links and sublinks
const navSide = document.querySelector('#nav-side');
const navLink1 = document.querySelector('#link1');
const navLink2 = document.querySelector('#link2');
const navLink3 = document.querySelector('#link3');

//add click event listener to buttons
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

//adding event listener to current page link items
navLink1.addEventListener('click', closeMenu);
navLink2.addEventListener('click', closeMenu);
navLink3.addEventListener('click', closeMenu);

// function to open menu
function openMenu(){
  navSide.classList.add('show');
}

//function to close menu
function closeMenu(){
  navSide.classList.remove('show');
}