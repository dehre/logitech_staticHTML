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


//Setting Scrolling height of the carousel
function changeScrollingHeight(){
  console.log("function called");
  let totalHeight = $(window).height();
  let belowCarousel = $(".main-page-hidden-content").height();
  let stringBelowCarousel = `${belowCarousel + totalHeight + 50}px`;

  document.body.style.setProperty("--below-carousel",stringBelowCarousel);
};

//Call the changeScrollingHeight function whenever the device's viewPort changes
$(window).resize(changeScrollingHeight);
