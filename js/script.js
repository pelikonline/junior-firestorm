$(document).ready(function () {
  configureGalleryGuarantee({
    container: ".js-gallery-guarantee",
    prevArrow: ".js-gallery-guarantee-prev",
    nextArrow: ".js-gallery-guarantee-next",
    containerDots: ".js-gallery-guarantee-dots",
  });

  configureGalleryAbout({
    container: ".js-gallery-about",
    prevArrow: ".js-gallery-about-prev",
    nextArrow: ".js-gallery-about-next",
  });

  configureGalleryProgram({
    container: ".js-gallery-program",
    prevArrow: ".js-gallery-program-prev",
    nextArrow: ".js-gallery-program-next",
    containerDots: ".js-gallery-program-dots",
  });

  configureScrollTop({
    container: "body,html",
    targetElement: ".js-button-up",
    duration: 500,
  });
});

function configureGalleryGuarantee(config) {
  $(config.container).slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: $(config.prevArrow),
    nextArrow: $(config.nextArrow),
    appendDots: $(config.containerDots),
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function configureGalleryAbout(config) {
  $(config.container).slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: $(config.prevArrow),
    nextArrow: $(config.nextArrow),
    slidesToShow: 2,
    slidesToScroll: 2,
  });
}

function configureGalleryProgram(config) {
  $(config.container).slick({
    adaptiveHeight: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: $(config.prevArrow),
    nextArrow: $(config.nextArrow),
    appendDots: $(config.containerDots),
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function configureScrollTop(config) {
  $(config.targetElement).click(function (e) {
    e.preventDefault();

    $(config.container).animate(
      {
        scrollTop: 0,
      },
      config.duration
    );
    return false;
  });
}
