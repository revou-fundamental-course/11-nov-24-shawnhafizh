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