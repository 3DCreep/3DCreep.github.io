function open_nav() {
  $(".main_nav").toggleClass("open_nav");
  $(".nav_logo").toggleClass("open_navlogo");
  $(".bar").toggleClass("active_bar");
}

document.getElementById("email_link").addEventListener("click", function () {
  // Get the text you want to copy
  let text = "AlexST_frwrk@proton.me";

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
let code = document.querySelector("html");
code.setAttribute("data-theme", getCookie("data-theme"));
function createCookie(name, val, expTime) {
  const date = new Date();
  date.setTime(date.getTime() + expTime * 24 * 3600 * 1000);
  let expire = "expires=" + date.toUTCString();
  document.cookie = `${name}=${val}; ${expire}; path=/`;
  console.log(document.cookie);
}
function getCookie(name) {
  const cokDecode = decodeURIComponent(document.cookie);
  const cokArray = cokDecode.split(";");
  var resultCok = null;

  cokArray.forEach((el) => {
    console.log(el);
    if (el.indexOf(name) == 0) {
      console.log(el, "< = element");
      resultCok = el.substring(name.length + 1);
      console.log(name, "< = Name");
      console.log(resultCok, "< = Value");
    }
  });
  return resultCok;
}
function deleteCookie(name) {
  createCookie(name, null, null);
}
