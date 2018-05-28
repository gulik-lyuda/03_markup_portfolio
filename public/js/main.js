const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

// change state of our nav menu and underlying page content
navToggle.addEventListener('click', function() {
	containerAll.style.transition = 'transform ease-out 250ms';  //just fix some bug for mobile devices with incorrect transition
	document.body.classList.toggle('nav-is-open');
})

//hide our nav menu if user click some menu item
nav.addEventListener('click', function() {
	containerAll.style.transition = '0ms';  //just fix some bug for mobile devices with incorrect transition
	document.body.classList.remove('nav-is-open');
})