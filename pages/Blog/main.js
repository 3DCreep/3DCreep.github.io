function open_nav() {
  $(".main_nav").toggleClass("open_nav");
  $(".nav_logo").toggleClass("open_navlogo");
  $(".bar").toggleClass("active_bar");
}

document.getElementById("email_link").addEventListener("click", function () {
  // Get the text you want to copy
  let text = "boom";

  // Use the Clipboard API to write the text to the clipboard
  navigator.clipboard
    .writeText(text)
    .then(function () {
      console.log("Copied!");
    })
    .catch(function (err) {
      console.error("Sorry, an error occured while copying", err);
    });
});
