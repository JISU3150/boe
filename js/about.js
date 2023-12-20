$(function () {
  /*visual slide*/
  let i = 0;
  let wid = 100;
  let count = $(".slide li").length;
  $(".vs_text").eq(0).addClass("on");
  setInterval(function () {
    i++;
    if (i == count - 1) {
      $(".slide")
        .stop()
        .animate({ left: "-300%" }, function () {
          $(".slide").css({ left: "0%" });
        });
      i = 0;
    } else {
      $(".slide")
        .stop()
        .animate({ left: -i * wid + "%" });
    }

    setTimeout(function () {
      $(".vs_text").removeClass("on");
      $(".vs_text").eq(i).addClass("on");
    }, 300);
  }, 4400);

  /*scroll*/
  let intro1 = $(".intro1").offset().top - 500;
  let intro2 = $(".intro2").offset().top - 500;
  let intro3 = $(".intro3").offset().top - 500;
  let location = $(".location").offset().top - 500;

  $(window).scroll(function () {
    $(this).index();
    let scroll = $(window).scrollTop();
    // console.log(scroll);
    if (scroll >= intro1 && scroll < intro2) {
      $(".intro1_img").addClass("on");
      $(".al_b").addClass("on");
      $(".intro1_text").addClass("on");
    } else if (scroll >= intro2 && scroll < intro3) {
      $(".intro2_img").addClass("on");
      $(".al_o").addClass("on");
      $(".intro2_text").addClass("on");
    } else if (scroll >= intro3 && scroll < location) {
      $(".intro3_img").addClass("on");
      $(".al_e").addClass("on");
      $(".intro3_text").addClass("on");
    } else if (scroll >= location) {
      $(".showroom img").addClass("on");
      $(".loca_text").addClass("on");
    }
  });
});
