new Swiper('.swiper', {
    speed: 700,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true
    }, 
    // autoHeight: true,
    // loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // slidesPerView: 'auto',
    // slidesPerGroup: 1,
});