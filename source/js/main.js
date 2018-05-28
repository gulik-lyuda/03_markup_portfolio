// 
// Work with navigation menu
// 
const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

// change state of our nav menu and underlying page content
navToggle.addEventListener('click', _ => {
	containerAll.style.transition = 'transform ease-out 250ms';  //just fix some bug for mobile devices with incorrect transition
	document.body.classList.toggle('nav-is-open');
})

//hide our nav menu if user click some menu item
nav.addEventListener('click', _ => {
	containerAll.style.transition = '0ms';  //just fix some bug for mobile devices with incorrect transition
	document.body.classList.remove('nav-is-open');
})

// 
// Work with modals
// 
const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e => {
	const modalToggle = e.target.closest('.portfolio-link');

	if (!modalToggle) return;

	const modal = modalToggle.parentNode.nextElementSibling;  //it'll be our portfolio-modal div
	const closeButton = modal.querySelector('.modal-close');	
	
	const modalOpen = _ => {
		modal.classList.add('is-open');
		modal.style.animation = 'modalIn 500ms forwards';
	}

	const modalClose = _ => {
		modal.classList.remove('is-open');
		modal.removeEventListener('animationend', modalClose);
	}

	closeButton.addEventListener('click', _ => {
		modal.style.animation = 'modalOut 500ms forwards';
		modal.addEventListener('animationend', modalClose);
	})

	// let's close a modal with Esc key
	document.addEventListener('keydown', e => {
		if (e.keyCode === 27) {
			modal.style.animation = 'modalOut 500ms forwards';
			modal.addEventListener('animationend', modalClose);
		}
	})

	modalOpen();
})