$(function () {
  /*visual setInterval*/
  setInterval(function () {
    $(".inner").addClass("on");
  }, 500);

  /*con1, con2 slide*/
  let i = 0;
  let wid = 100;
  let count = $(".con1_slide li").length;
  setInterval(function () {
    i++;
    if (i == count - 1) {
      $(".con1_slide>ul")
        .stop()
        .animate({ left: "-400%" }, function () {
          $(".con1_slide>ul").css({ left: 0 });
        });
      $(".con2_slide>ul")
        .stop()
        .animate({ left: "-400%" }, function () {
          $(".con2_slide>ul").css({ left: 0 });
        });
      i = 0;
    } else {
      $(".con1_slide>ul")
        .stop()
        .animate({ left: -i * wid + "%" });
      $(".con2_slide>ul")
        .stop()
        .animate({ left: -i * wid + "%" });
    }
  }, 4000);

  /*con3 fade*/
  let j = 0;
  let count2 = $(".con3_fade li").length;
  setInterval(function () {
    $(this).index();
    if (j == count2 - 1) {
      j = 0;
    } else {
      j++;
    }
    $(".con3_fade>ul li").fadeOut(500);
    $(".con3_fade>ul li").eq(j).fadeIn(500);
  }, 3000);

  /*con4 slide*/
  let k = 0;
  let wid2 = 100;
  let count3 = $(".con4_slide li").length;
  setInterval(function () {
    k++;
    if (k == count3 - 1) {
      $(".con4_slide>ul")
        .stop()
        .animate({ left: "-300%" }, function () {
          $(".con4_slide>ul").css({ left: 0 });
        });
      k = 0;
    } else {
      $(".con4_slide>ul")
        .stop()
        .animate({ left: -k * wid2 + "%" });
    }
  }, 3000);

  /*scroll*/
  let con1 = $(".con1").offset().top - 500;
  let con2 = $(".con2").offset().top - 500;
  let con3 = $(".con3").offset().top - 500;
  let con4 = $(".con4").offset().top - 500;

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= con1 && scroll < con2) {
      $(".con1").addClass("on");
    } else if (scroll >= con2 && scroll < con3) {
      $(".con2").addClass("on");
    } else if (scroll >= con3 && scroll < con4) {
      $(".con3").addClass("on");
    } else if (scroll >= con4) {
      $(".con4").addClass("on");
    }
  });
});
