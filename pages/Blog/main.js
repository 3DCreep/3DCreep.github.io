hljs.highlightAll();
function open_nav() {
  $(".main_nav").toggleClass("open_nav");
  $(".nav_logo").toggleClass("open_navlogo");
  $(".bar").toggleClass("active_bar");
}
document.addEventListener("DOMContentLoaded", () => {
  let opt_list = document.getElementsByClassName("theme_opt");
  console.log(opt_list, "< = list of options");
  for (let el of opt_list) {
    if (el.value == getCookie("data-theme")) {
      el.setAttribute("selected", "selected");
    }
  }
});
let code = document.querySelector("html");
console.log(getCookie("data-theme"));
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
function UpdateCok() {
  let select = document.getElementById("select_from");
  let total_val = select.value;
  createCookie("data-theme", total_val, 20);
  document.querySelector("html").setAttribute("data-theme", total_val);
}
