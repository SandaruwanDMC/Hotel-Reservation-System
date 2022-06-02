document.getElementById('pay').addEventListener('click',
	function(){
		document.querySelector('.pay-box').style.display = 'flex';
	});

document.querySelector('.close').addEventListener('click',
	function(){
		document.querySelector('.pay-box').style.display = 'none';
	})