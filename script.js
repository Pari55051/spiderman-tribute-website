// video toggle js
function toggleVideo() {
    const video = document.getElementById('trailerVideo');
    // const overlay = document.getElementById('overlay')
    const playButton = document.querySelector('.play-button');

    if (video.paused) {
        video.play();
        playButton.style.opacity = "0";
    } else {
        video.pause();
        playButton.style.opacity = "1";
    }
}


// slider js
var TrandingSlider = new Swiper('.img-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});