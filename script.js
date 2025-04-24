var typed = new Typed(".text", {
	strings: ["Full Stack Developer", "Frontend Developer", "Web Designer"],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});

document.addEventListener('DOMContentLoaded', () => {
	const toggler = document.querySelector('.navbar-toggler');
	const navbar = document.getElementById('navbar');

	toggler.addEventListener('click', () => {
		navbar.classList.toggle('show'); // Toggle the show class
	});
});
