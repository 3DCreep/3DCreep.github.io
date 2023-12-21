hljs.highlightAll();

let code = document.querySelector("html");
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progressbar");
  window.addEventListener("scroll", () => {
    const scrollpos = document.documentElement.scrollTop;
    const totalh = document.body.scrollHeight - window.innerHeight;

    progress.value = (scrollpos / totalh) * 100;
    progress.setAttribute("perc", Math.round(progress.value) + "%");
  });
});
function open_nav() {
  $(".main_nav").toggleClass("open_nav");
  $(".nav_logo").toggleClass("open_navlogo");
  $(".bar").toggleClass("active_bar");
}

code.setAttribute("data-theme", getCookie("data-theme"));
// $("html").attr("data-theme") = getCookie();

console.log(getCookie("data-theme"));
function createCookie(name, val, expTime) {
  const date = new Date();
  date.setTime(date.getTime() + expTime * 24 * 3600 * 1000);
  let expire = "expires=" + date.toUTCString();
  document.cookie = `${name}=${val}; ${expire}; path=/`;
  console.log(document.cookie);
}

// function createSimpleCookie(val, expTime) {
//   const date = new Date();
//   date.setTime(date.getTime() + expTime * 24 * 3600 * 1000);
//   let expire = "expires=" + date.toUTCString();
//   document.cookie = `${val}; ${expire}; path=/`;
//   console.log(document.cookie);
// }
$("#sup_buttob").on("click", () => {
  console.log(getCookie("data-theme"), "< = The cookie");
});
console.log(getCookie("data-theme"), "< = The cookie other");
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

// document.cookie = `site_theme=${$("html").attr("data-theme")}; `;
// console.log(document.cookie);
