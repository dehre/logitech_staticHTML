$(".navbar-toggleable-md").on("show.bs.collapse", function () {
  console.log("Element is opened");
  $("#top-logo").css("margin-bottom","10px");
  $(".fixed-top-menu").addClass("collapsing-menu");
  $(".fa-user-o,.fa-search").removeClass("hidden-md-down");
})

$(".navbar-toggleable-md").on("hidden.bs.collapse", function () {
  console.log("Element is closed");
  $("#top-logo").css("margin-bottom","-47px");
  $(".fixed-top-menu").removeClass("collapsing-menu");
  $(".fa-user-o,.fa-search").addClass("hidden-md-down");
})
