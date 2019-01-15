$(document).ready(function(){
  $(".container-slider").slick({
    autoplay: true,
    dots: true,
    // arrows: false;

  });
});

// 錨點跳轉動畫
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});