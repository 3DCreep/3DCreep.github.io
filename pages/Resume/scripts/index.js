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

const images = $(".portfolio_image");
function all_on() {
  images.css({ display: "flex" });
}
function adapt_on() {
  images.css({ display: "none" });
  $(".adapt").css({ display: "flex" });
}

function logo_on() {
  // if (images.attr("class") == "portfolio_image logo") {
  //   alert("test");
  // }
  images.css({ display: "none" });
  $(".logo").css({ display: "flex" });
}
function web_on() {
  images.css({ display: "none" });
  $(".web").css({ display: "flex" });
}
function design_on() {
  images.css({ display: "none" });
  $(".design").css({ display: "flex" });
}
