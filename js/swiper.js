new Swiper('.trener-swiper', {
    speed: 700,
    spaceBetween: 30,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true
    },
    autoHeight: true,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    // slidesPerView: 'auto',
    // slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

new Swiper('.i-swiper', {
    speed: 700,
    // spaceBetween: 30,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true
    },
    // autoHeight: true,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    slidesPerView: '1.2',
    // slidesPerGroup: 1.5,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    }
});