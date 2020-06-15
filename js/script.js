$(document).ready(function () {
  toggleModal({
    modalElement: ".js-modal",
    buttonElement: ".js-toggle-modal",
  });

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

  scrollToElement({
    destinationElement: "body,html",
    targetElement: ".js-button-up",
    duration: 500,
  });

  scrollToElement({
    destinationElement: ".js-guarantee",
    targetElement: ".js-button-arrow",
    duration: 500,
  });
});

function toggleModal(config) {
  $(config.buttonElement).click(function (e) {
    e.preventDefault();

    $(config.modalElement).fadeToggle();
  });
}

function configureGalleryGuarantee(config) {
  $(config.container).slick({
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: $(config.prevArrow),
    nextArrow: $(config.nextArrow),
    appendDots: $(config.containerDots),
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

function configureGalleryAbout(config) {
  $(config.container).slick({
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: $(config.prevArrow),
    nextArrow: $(config.nextArrow),
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

function configureGalleryProgram(config) {
  $(config.container).slick({
    adaptiveHeight: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: $(config.prevArrow),
    nextArrow: $(config.nextArrow),
    appendDots: $(config.containerDots),
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}

function scrollToElement(config) {
  $(config.targetElement).click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $(config.destinationElement).offset().top,
      },
      config.duration
    );
    return false;
  });
}
