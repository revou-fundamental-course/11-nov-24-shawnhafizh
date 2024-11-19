const navbar = document.querySelector('.main-header');
const scrollThreshold = 65; // Adjust this value as needed

const carouselData = [
    {
        name: "Ivan Gunawan",
        job: "Bapak Rumah Tangga",
        age: 42,
        review: "Liburan dengan LUGGAG!O membuat banyak sekali kenganan bahagia bersama keluarga. Mulai dari destinasi wisata hingga kulinernya.",
		image: "https://totabuan.news/wp-content/uploads/2021/09/unnamed-4.jpg"
    },
    {
        name: "Ade Rai",
        job: "Olahragawan",
        age: 54,
        review: "Saya sangat senang dengan seluruh kegiatan yang direncanakan oleh travel ini, sungguh memori yang indah!",
		image: "https://inionline.id/wp-content/uploads/2019/03/images-15_1.jpg"
    },
    {
        name: "Uan Kaisar",
        job: "Penyanyi",
        age: 33,
        review: "Liburannya keren banget euy, kita satu band senang-senang mantai, jalan-jalan. Pokoknya the best deh!",
		image: "https://instagram.fcgk33-1.fna.fbcdn.net/v/t39.30808-6/461979282_18439143829067353_5533191760417691928_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgk33-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=bXd1R2kVnjsQ7kNvgEy7M9x&_nc_gid=3764eb7361bf4b329e2729155fc6df03&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQ3MDU0MTIwMjQ4NzgzMzU5OQ%3D%3D.3-ccb7-5&oh=00_AYCPyg_DmmLv_mqy-F9HuboZ09as1mQN8OuSu8SVn_lryg&oe=6741B7AF&_nc_sid=22de04"
    }
];

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

let currentIndex = 0;
function updateCarousel() {
    const currentItem = carouselData[currentIndex];

	document.getElementById("review").textContent = `"${currentItem.review}"`;
	document.getElementById("name").textContent = currentItem.name;
	document.getElementById("job-age").textContent = `${currentItem.job}, ${currentItem.age}`;

	const bannerElement = document.querySelector(".banner-autoslide");
	bannerElement.style.backgroundImage = `url('https://picsum.photos/800?random=${Date.now()}')`;

	const profilePictureElement = document.querySelector(".profile-picture");
	profilePictureElement.style.backgroundImage = `url('${currentItem.image}')`;

}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel();
}

updateCarousel();
setInterval(nextSlide, 5000);

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