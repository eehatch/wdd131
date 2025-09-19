const themeSelector = document.querySelector("select");
const logo = document.querySelector("img.logo");

function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        logo.src = "byui-logo_white.png";
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        logo.src = "byui-logo_blue.webp";
    }
    console.log(themeSelector.value);
}
themeSelector.addEventListener('change', changeTheme);
changeTheme();

