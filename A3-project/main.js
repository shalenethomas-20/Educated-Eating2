//----------------Tips Scroller
const tipsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.s-tips',
        scrub: 1,
        toggleActions: "none none reverse none",
        start: 'top top',
        pin: true
    }
});

tipsTl.to('.tp-slide-wrap', {x: '-102vw', duration: 10});

//----------------Click Show

const changeImages = document.querySelectorAll('.change-image');

changeImages.forEach(image => {
  image.addEventListener('click', () => {
      image.src = image.getAttribute('data-src');
  });
});

//-----------------Recipe Book

//--------------Time Management
