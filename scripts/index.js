$("#theme_btn").on("click", function () {
  const html = $("#html");
  if (html.attr("data-theme") == "light") {
    html.attr("data-theme", "dark");
  } else {
    html.attr("data-theme", "light");
  }
});
