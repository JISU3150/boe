$(function () {
  /*login menu slide*/
  $(".log").mouseover(function () {
    $(".log>ul").stop().slideDown(500);
  });
  $(".log").mouseout(function () {
    $(".log>ul").stop().slideUp(500);
  });

  /*scroll*/
  let base = -100;
  let con1 = $(".con1").offset().top + base;
  let con2 = $(".con2").offset().top + base;
  let con3 = $(".con3").offset().top + base;
  let con4 = $(".con4").offset().top + base;

  $(window).scroll(function () {
    $(this).index();
    let scroll = $(window).scrollTop();
    // console.log(con1);
    if (con1 <= scroll && scroll < con2) {
      $(".con1_left_img").addClass("on");
      $(".con1_right_img").addClass("on");
      $(".con1_title").addClass("on");
      $(".con1_text>h3").addClass("on");
      $(".con1_text>p").addClass("on");
    }
    if (con2 <= scroll && scroll < con3) {
      $(".con2_text").addClass("on");
      $(".con2_left_brand").addClass("on");
      $(".con2_right_designer").addClass("on");
      $(".con2_title_1").addClass("on");
      $(".con2_title_2").addClass("on");
    }
    if (con3 <= scroll && scroll < con4) {
      $(".con3_title").addClass("on");
      $(".con3_title_wrap>p").addClass("on");
      $(".con3_img1").addClass("on");
      $(".con3_img2").addClass("on");
      $(".con3_img3").addClass("on");
      $(".con3_img4").addClass("on");
      setTimeout(function () {
        $(".year1").addClass("on");
      }, 2000);
      setTimeout(function () {
        $(".year2").addClass("on");
      }, 2300);
      setTimeout(function () {
        $(".year3").addClass("on");
      }, 2600);
      setTimeout(function () {
        $(".year4").addClass("on");
      }, 2900);
    }
    if (con4 <= scroll) {
      $(".show_title").addClass("on");
      $(".show_content").addClass("on");
      $(".contact_title").addClass("on");
      $("form").addClass("on");
    }
  });

  /*press click*/
  let i = 0;
  let count = $(".con3_img1 img").length;
  console.log(count);
  $(".list li").eq(0).addClass("active");
  $(".list li").click(function () {
    $(this).index();
    $(".list li").removeClass("active");
    $(this).addClass("active");
    $(".con3_img_wrap .con3_img img").fadeOut(500);
    for (i = 0; i <= count - 1; i++) {
      console.log(i);
      $(".con3_img_wrap .con3_img")
        .eq(i)
        .find("img")
        .eq($(this).index())
        .fadeIn(500);
    }
  });

  /*mobile visual slide*/
  let media = $(window).width();
  if (media < 767) {
    let j = 0;
    let wid = 100;
    let count = $("#visual li").length;

    setInterval(function () {
      j++;
      if (j == count - 1) {
        $("#visual ul")
          .stop()
          .animate({ left: "-400%" }, function () {
            $("#visual ul").css({ left: 0 });
          });
        j = 0;
      } else {
        $("#visual ul")
          .stop()
          .animate({ left: -j * wid + "%" });
      }
    }, 4000);
  }
  /*
    $(".con3_img_wrap .con3_img1 img").fadeOut(500);
    $(".con3_img_wrap .con3_img1 img").eq($(this).index()).fadeIn(500);
    $(".con3_img_wrap .con3_img2 img").fadeOut(500);
    $(".con3_img_wrap .con3_img2 img").eq($(this).index()).fadeIn(500);
    $(".con3_img_wrap .con3_img3 img").fadeOut(500);
    $(".con3_img_wrap .con3_img3 img").eq($(this).index()).fadeIn(500);
    $(".con3_img_wrap .con3_img4 img").fadeOut(500);
    $(".con3_img_wrap .con3_img4 img").eq($(this).index()).fadeIn(500);
    */
});
