const themeSelector = document.querySelector("dark");

function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        document.logo.src = "byui-logo_white.png";
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.logo.src = "byui-logo_blue.png";
    }
    console.log(themeSelector.value);
}
changeTheme();
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);