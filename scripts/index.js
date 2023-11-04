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
