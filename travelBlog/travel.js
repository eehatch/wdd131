  const posts = [
    {
      id: 1,
      location: "UK",
      year: "2024",
      description:
        "I lived in London the summer of 2024, where I worked at DNEG and spent all my free time wandering the city and going to shows.",
      imgSrc: "images/london.jpg",
      imgAlt: "A picture in the UK",
      width: "278",
      height: "375"
    },
    {
      id: 2,
      location: "Grand Canyon",
      year: "2025",
      description:
        "I lived near the North Rim of the Grand Canyon where I worked in a bakery. I was also evacuated for 2 weeks due to the Dragon Bravo and White Sage fires in the area. I spent my free time in national parks!",
      imgSrc: "images/gc.jpg",
      imgAlt: "A picture in AZ",
      width: "278",
      height: "209"
    },
    {
      id: 3,
      location: "D.C. & Florida",
      year: "2021",
      description:
        "My family spent 2 weeks on the East Coast in August of 2021. We spent a week in Washington D.C where we stayed with my uncle, then we flew down to Orlando FL for a week which we spent at DisneyWorld.",
      imgSrc: "images/disney.jpg",
      imgAlt: "A picture with my Family",
      width: "278",
      height: "209"
    }
  ];

  function reviewTemplate(post) {
    return `
      <div class="post-card">
        <img src="${post.imgSrc}" alt="${post.imgAlt}" width="${post.width}px" height="${post.height}px" >
        <div class="card-content">
          <h2>${post.location}</h2>
          <h3>${post.year}</h3>
          <p class="description">${post.description}</p>
        </div>
      </div>
    `;
  }

  const postsContainer = document.getElementById("posts-container");

  function renderPosts(filteredPosts) {
    postsContainer.innerHTML = filteredPosts.map(reviewTemplate).join("");
  }
  function filterSelection(location) {
    let filtered;
    if (location === "all") {
      filtered = posts;
    } else {
      filtered = posts.filter(post => post.location === location);
    }

    renderPosts(filtered);
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    const activeBtn = Array.from(buttons).find(
      btn =>
        btn.textContent.trim() === location ||
        (location === "all" && btn.textContent.includes("Show all"))
    );
    if (activeBtn) activeBtn.classList.add("active");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderPosts(posts);
  });
