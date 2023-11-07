$(document).ready(function () {
  let hiderow = $(".expanded");
  $("#articles_more_btn").click(function () {
    hiderow.toggleClass("hidden");
    if (hiderow.is(":visible")) {
      $("#articles_more_btn").html("Скрыть");
    } else {
      $("#articles_more_btn").html("Смотреть всё");
    }
  });
});

//function show() {
//  let hiderow = $("#expanded");
// hiderow.toggleClass("hidden");
// }
function modal_show() {
  $(".modal_box").toggleClass("hidden");
}
