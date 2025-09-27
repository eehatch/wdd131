const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector("#menuItems");
    menu.classList.toggle("hidden");
}
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("#menuItems");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}
handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt){
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
}
function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clicked = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const img = clicked.src.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newpic = img[0] + "-full.jpeg";
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const htmltoinsert = viewerTemplate(newpic, clicked.alt);
    document.body.insertAdjacentHTML("afterbegin", htmltoinsert);

	// add a listener to the close button (X) that calls a function called closeViewer when clicked THIS DOES NOTHING
    // const viewer = document.querySelector(".viewer");
    // const closeBtn = viewer.querySelector(".close-viewer");
    // closeBtn.addEventListener("click", closeViewer);
    // viewer.addEventListener("click", (e) => {
    //     if (e.target === viewer) {
    //         closeViewer();
    //     }
    // });
}
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer){
    viewer.remove();
  } 
}
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(img => {
    img.addEventListener("click", viewHandler);
});


// only works outside of the function
document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-viewer")) {
    const viewer = event.target.closest(".viewer");
    if (viewer) viewer.remove();
  }
});