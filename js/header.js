$(function () {
  /*login menu slide*/
  $(".log").mouseover(function () {
    $(".log>ul").stop().slideDown(500);
  });
  $(".log").mouseout(function () {
    $(".log>ul").stop().slideUp(500);
  });

  /*hambg_menu click*/
  $(".hambg_bar").click(function () {
    $(".bar").toggleClass("on");
    $(".hambg_menu").toggleClass("on");
  });
  /*ham_menu list*/
  $(".hambg_menu li a").mouseenter(function () {
    $(".hambg_menu li a").css({ color: "#999" });
    $(this).css({ color: "#222" });
  });
  $(".hambg_menu li a").mouseleave(function () {
    $(".hambg_menu li a").css({ color: "#222" });
  });
});
