let button = document.querySelector('.btn');
let mw = document.querySelector('.modal_window');
let exit_btn = document.querySelector('.exit_btn');
let exit_img = document.querySelector('.exit_img');

// button.addEventListener('click', () => {
//     mw.classList.toggle("active")
//     document.body.classList.toggle('body_active')
// });
button.addEventListener('click', () => {
    mw.style.display = "block"
    mw.style.zIndex = 100
    document.body.classList.toggle('body_active')
})
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        mw.style.display = "none"
        mw.style.zIndex = 0
    }
})
exit_btn.addEventListener('click', () => {
    mw.style.display = "none"
    mw.style.zIndex = 0
    document.body.classList.toggle('body_active')
});

exit_img.addEventListener('click', () => {
    mw.style.display = "none"
    mw.style.zIndex = 0
    document.body.classList.toggle('body_active')
});

let burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    document.querySelector('.nav').classList.toggle('open')
    document.body.classList.toggle('body_active')
    document.querySelector('.main').classList.toggle('ban')
});



// swiper js
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



AOS.init();


// dragula js
window.onload = function () {
    dragula([
        document.querySelector('.footer_block'),
        document.querySelector('.main_block')
    ]);
};
