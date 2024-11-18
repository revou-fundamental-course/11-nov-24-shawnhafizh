const navbar = document.querySelector('.main-header');
const scrollThreshold = 65; // Adjust this value as needed

const destinations = [
	{ place: 'Bali', description: 'Travel dan wisata di Bali. Kunjungi cagar budaya dan kuliner menarik.' },
	{ place: 'Jepang', description: 'Travel dan wisata di Jepang. Kunjungi cagar budaya dan kuliner menarik.' },
	{ place: 'Singapura', description: 'Travel dan wisata di Singapura. Kunjungi cagar budaya dan kuliner menarik.' },
	{ place: 'Bandung', description: 'Travel dan wisata di Bandung. Kunjungi cagar budaya dan kuliner menarik.' },
	{ place: 'Surabaya', description: 'Travel dan wisata di Surabaya. Kunjungi cagar budaya dan kuliner menarik.' },
	{ place: 'Yogyakarta', description: 'Travel dan wisata di Yogyakarta. Kunjungi cagar budaya dan kuliner menarik.' }
];

window.addEventListener('scroll', () => {
	if (window.scrollY > scrollThreshold) {
		navbar.classList.add('fixed');
	} else {
		navbar.classList.remove('fixed');
	}
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');   

    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

document.getElementById("validation-form").addEventListener("submit", function(event) {
	let isValid = true;
	
	// Validate name input
	const name = document.getElementById("name").value.trim();
	const nameError = document.getElementById("name-error");
	if (name === "") {
		nameError.textContent = "Please enter your full name.";
		isValid = false;
	} else {
		nameError.textContent = "";
	}
	
	// Validate email input & pattern
	const email = document.getElementById("email").value.trim();
	const emailError = document.getElementById("email-error");
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		emailError.textContent = "Please enter a valid email address.";
		isValid = false;
	} else {
		emailError.textContent = "";
	}
	
	// Validate interest selection
	const interest = document.getElementById("interest").value;
	const interestError = document.getElementById("interest-error");
	if (interest === "") {
		interestError.textContent = "Please select an option.";
		isValid = false;
	} else {
		interestError.textContent = "";
	}
	
	// Prevent form submission if not valid
	if (!isValid) {
		event.preventDefault();
	}
});

function renderDestinationList(destinations, containerId, itemTemplate) {
	const destinationList = document.getElementById(containerId);

	destinations.forEach(destination => {
		const listItem = document.createElement('li');
		listItem.innerHTML = itemTemplate
			.replace('{place}', destination.place)
			.replace('{description}', destination.description);
		destinationList.appendChild(listItem);
	});
	}

const containerId = 'destinationList';
const itemTemplate = `
	<div class="our-package-items">
		<i class="package-icon fa-solid fa-lightbulb"></i>
		<div class="package-description">
			<p class="text-base text-bold">{place}</p>
			<p class="text-sm">{description}</p>
		</div>
	</div>
`;

renderDestinationList(destinations, containerId, itemTemplate);