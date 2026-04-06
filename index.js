const burgerBtn = document.getElementById('burger-btn');
const burgerIcon = document.getElementById('burger-icon');
const overlay = document.getElementById('header-overlay');

burgerBtn.addEventListener('click', () => {
	overlay.classList.toggle('is-open');

	if (overlay.classList.contains('is-open')) {
		burgerIcon.src = 'img/cross.svg';
		document.body.style.overflow = 'hidden';
	} else {
		burgerIcon.src = 'img/open.svg';
		document.body.style.overflow = '';
	}
});

const navLinks = document.querySelectorAll('.header__link, .login, .register');
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		overlay.classList.remove('is-open');
		burgerIcon.src = 'img/open.svg';
		document.body.style.overflow = '';
	});
});