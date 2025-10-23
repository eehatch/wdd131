
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
		location: "D.C. & Florida",
		year: '2021',
		description:
			"My family spent 2 weeks on the East Coast in August of 2021. We spent a week in Washington D.C where we stayed with my uncle, then we flew down to Orlando FL for a week which we spend at DisneyWorld",
		imgSrc: 'images/disney.jpg',
		imgAlt: 'A picture with my Family'
	}
]

function reviewTemplate(post) {
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

// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("post-card");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }
// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }