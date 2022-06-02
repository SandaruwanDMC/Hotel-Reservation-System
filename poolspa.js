//selectors
let header=document.querySelector('.header');
let hamburgerMenu=document.querySelector('.hamburger-menu');

window.addEventListener('scrol',function(){
 let windowPosition = window.scrollY > 0;
 header.classList.toggle('active', windowPosition)
})
hamburgerMenu.addEventListener('click',function () {
    header.classList.toggle('menu-open');
})

//----------pkg------------my----------//
function link1()
{
  window.location.href="Suite Package.html";
}

function link2()
{
  window.location.href="Deluxe Package.html";
}
function link3()
{
  window.location.href="Premium Package.html";
}
function link4()
{
  window.location.href="Reservations.html";
}

