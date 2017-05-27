$(".navbar-toggleable-md").on("show.bs.collapse", function () {
  console.log("Element is opened");
  $("#top-logo").css("margin-bottom","15px");
  const topMenuStyles = {
    "background-color": "#252a2c",
    "height": "100vh",
  };
  $(".fixed-top-menu").css(topMenuStyles);
  // $(".white-link").css("color","#dcfd00");
})

$(".navbar-toggleable-md").on("hidden.bs.collapse", function () {
  console.log("Element is closed");
  $("#top-logo").css("margin-bottom","-47px");
})
