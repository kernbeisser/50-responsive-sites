const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", (e) => {
    keys[0].innerHTML = e.key === ' ' ? 'Space' : e.key;
    keys[1].innerHTML = e.keyCode;
    keys[2].innerHTML = e.code;
})