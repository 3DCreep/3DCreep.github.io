$("#theme_btn").on("click", function () {
  const html = $("#html");
  const indit = $(".themebtn_ind");
  if (html.attr("data-theme") == "light") {
    html.attr("data-theme", "dark");
    indit.css("top", "50%");
  } else {
    html.attr("data-theme", "light");
    indit.css("top", "0%");
  }
});
const revs = $(".reviews_sec_cards");
const rev = $(".reviews_sec_card");
const width = rev.outerWidth();
let pixcount = 0;

function carouselright() {
  pixcount += width + 30;
  if (pixcount > width * 2 + 30 * 2) {
    pixcount = 0;
  }
  revs.css("transform", `translateX(-${pixcount}px)`);

  console.log(pixcount);
}
function carouselleft() {
  pixcount -= width + 30;
  if (pixcount < 0) {
    pixcount = width * 2 + 30 * 2;
  }
  revs.css("transform", `translateX(-${pixcount}px)`);
  console.log(pixcount);
}
$(".hamburger_menu").on("click", () => {
  const nav = $("nav");
  nav.toggleClass("burger_open");
  $(".bar ").toggleClass("bar_active");
});
