const burger = document.getElementById("open");
const times = document.getElementById("close");
const nav = document.querySelector("nav");


burger.addEventListener("click", () => {
    document.querySelector(".container").classList.add("show-nav");
    nav.style.visibility = "visible";
    // nav.style.transition = "transform 1s linear";
});

times.addEventListener("click", () => {
    document.querySelector(".container").classList.remove("show-nav");
    nav.style.visibility = "hidden";
});