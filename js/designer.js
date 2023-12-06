$(function () {
  let con1 = $(".con1").offset().top - 300;
  let con2 = $(".con2").offset().top - 300;
  let con3 = $(".con3").offset().top - 300;

  $(".list li").eq(0).addClass("on");
  $(".list li").click(function () {
    let i = $(this).index();
    $(".list li").removeClass("on");
    $(this).addClass("on");

    $(".designer_tab_wrap").css({ display: "none" });
    $(".designer_tab_wrap").eq(i).css({ display: "block" });
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (con1 <= scroll && scroll < con2) {
      $(".line").addClass("on");
      $(".designer_detail p").addClass("on");
      $(".designer_img").addClass("on");
    } else if (con2 <= scroll && scroll < con3) {
      $(".con2_img").addClass("on");
      $(".con2_text").addClass("on");
    } else if (con3 <= scroll) {
      $(".con3_text").addClass("on");
      $(".con3_img").addClass("on");
      $(".con3_img2").addClass("on");
    }
  });

  let media = $(window).width();
  let i = 0;
  if (media <= 390) {
    $(this).index();
    setInterval(function () {
      if (i == 3) {
        i = 0;
      } else {
        i++;
      }
      $(".designer_slide li").stop().fadeOut(500);
      $(".designer_slide li").eq(i).fadeIn(500);
    }, 2000);
  }
});
