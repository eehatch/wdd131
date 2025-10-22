const posts = [
	{
		id: 1,
		location: "UK",
		year: '2024',
		description:
			"I lived in London the summer of 2024, where I worked at DNEG and spent all my free time wondering the city and going to shows",
		imgSrc: 'images/london.jpg',
		imgAlt: 'A picture in the UK'
	}, 
	{
		id: 2,
		location: "Grand Canyon",
		year: '2025',
		description:
			"I lived near the North Rim of the Grand Canyon where I worked in a bakery. I was also evacuated for 2 weeks due to the Dragon Bravo and White Sage fires in the area. I spent my free time in national parks!",
		imgSrc: 'images/gc.jpg',
		imgAlt: 'A picture in AZ'
	}, 
	{
		id: 3,
		location: "D.C & Florida",
		year: '2021',
		description:
			"My family spent 2 weeks on the East Coast in August of 2021. We spent a week in Washington D.C where we stayed with my uncle, then we flew down to Orlando FL for a week which we spend at DisneyWorld",
		imgSrc: 'images/disney.jpg',
		imgAlt: 'A picture with my Family'
	}
]

function reviewTemplate(post) {
//   const tagsHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
  return `
    <div class="post-card">
      <img src="${post.imgSrc}" alt="${post.imgAlt}">
      <div class="card-content">
        <h2>${post.location}</h2>
        <h3>${post.year}</h3>
		<p class="description">${post.description}</p>
      </div>
    </div>
  `;
}

const container = document.getElementById("posts-container");
container.innerHTML = posts.map(reviewTemplate).join('');


let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}