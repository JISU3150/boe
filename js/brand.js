$(function () {
  let con2 = $(".con2").offset().top - 500;

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    // console.log(scroll);
    if (scroll < 2100) {
      $(".change_img img").css({ display: "none" });
      $(".change_img img").eq(0).css({ display: "block" });
      $(".change_img2 img").css({ display: "none" });
      $(".change_img2 img").eq(0).css({ display: "block" });
      $(".change_img3 img").css({ display: "none" });
      $(".change_img3 img").eq(0).css({ display: "block" });
      $(".change_img4 img").css({ display: "none" });
      $(".change_img4 img").eq(0).css({ display: "block" });
    } else if (scroll >= 2100 && scroll < 3000) {
      $(".change_img img").css({ display: "none" });
      $(".change_img img").eq(1).css({ display: "block" });
      $(".change_img2 img").css({ display: "none" });
      $(".change_img2 img").eq(1).css({ display: "block" });
      $(".change_img3 img").css({ display: "none" });
      $(".change_img3 img").eq(1).css({ display: "block" });
      $(".change_img4 img").css({ display: "none" });
      $(".change_img4 img").eq(1).css({ display: "block" });
    } else if (scroll >= 3000) {
      $(".change_img img").css({ display: "none" });
      $(".change_img img").eq(2).css({ display: "block" });
      $(".change_img2 img").css({ display: "none" });
      $(".change_img2 img").eq(2).css({ display: "block" });
      $(".change_img3 img").css({ display: "none" });
      $(".change_img3 img").eq(2).css({ display: "block" });
      $(".change_img4 img").css({ display: "none" });
      $(".change_img4 img").eq(2).css({ display: "block" });
    }

    if (scroll >= con2) {
      $(".con2_top_back").addClass("on");
      $(".con2_bottom_back").addClass("on");
      $(".collection li").addClass("on");
    }
  });

  /*brand tab*/
  $(".list li").eq(0).addClass("on");
  $(".list li").click(function () {
    let i = $(this).index();
    $(".list li").removeClass("on");
    $(this).addClass("on");
    $(".brand_tab_wrap").css({ display: "none" });
    $(".brand_tab_wrap").eq(i).css({ display: "block" });
    $(".con2_tab_wrap").css({ display: "none" });
    $(".con2_tab_wrap").eq(i).css({ display: "block" });
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
      $(".brand_slide li").stop().fadeOut(500);
      $(".brand_slide li").eq(i).fadeIn(500);
    }, 2000);
  }
});
