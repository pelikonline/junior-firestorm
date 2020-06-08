$(document).ready(function () {
  configureGalleryAbout();

  configureScrollTop(".js-button-up");
});

function configureGalleryAbout() {
  const prevArrow = $(".js-gallery-about-prev");
  const nextArrow = $(".js-gallery-about-next");

  $(".js-gallery-about").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    slidesToShow: 2,
    slidesToScroll: 2,
  });
}

function configureScrollTop(element) {
  $(element).click(function (e) {
    e.preventDefault();

    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
}
