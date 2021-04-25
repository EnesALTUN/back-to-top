/*=====  BACK TO TOP  =====*/
const toTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100)
        toTop.classList.add("topActive");
    else
        toTop.classList.remove("topActive");
});

toTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});