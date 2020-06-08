$(document).ready(function () {
  configureGalleryAbout({
    container: ".js-gallery-about",
    prevArrow: ".js-gallery-about-prev",
    nextArrow: ".js-gallery-about-next",
  });

  configureScrollTop({
    container: "body,html",
    targetElement: ".js-button-up",
    duration: 500,
  });
});

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
