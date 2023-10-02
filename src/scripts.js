$(document).ready(function () {
  // Mostre a div de rolagem quando a página é rolada para baixo
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").addClass("show-scroll");
    } else {
      $(".scroll-to-top").removeClass("show-scroll");
    }
  });

  // Role suavemente para o topo quando a div é clicada
  $(".scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});
