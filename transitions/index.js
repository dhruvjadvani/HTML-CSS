const el = document.getElementById("app");

window.addEventListener("click", function (event) {
    const{clientX, clientY}= event;
    el.style.transform = `translate(${clientX - 50}px, ${clientY - 50}px)`
});
