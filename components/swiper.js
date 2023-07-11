export default swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  });