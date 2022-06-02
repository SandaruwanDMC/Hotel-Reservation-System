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

//-------pkg----------------my--------//
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


//meeting
function onmouse1()
		{
			document.getElementById('but1').style.color="#cccc00";
		}
		function onmouse2()
		{
			document.getElementById('but2').style.color="#cccc00";
		}
		function onmouse3()
		{
			document.getElementById('but3').style.color="#cccc00";
		}
		function normouse1()
		{
			document.getElementById('but1').style.color="";
		}
		function normouse2()
		{
			document.getElementById('but2').style.color="";
		}
		function normouse3()
		{
			document.getElementById('but3').style.color="";
		}
		function link1()
		{
			window.open("bookfull.html");
		}
		function link2()
		{
			window.open("bookhalf.html");
		}
		function link3()
		{
			window.open("bookthree.html");
		}