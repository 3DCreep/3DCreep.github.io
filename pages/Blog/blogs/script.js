// import hljs from "../../../node_modules/highlight.js/lib/core";
// import javascript from "../../../node_modules/highlight.js/lib/languages/javascript";
// import html from "../../../node_modules/highlight.js/lib/languages/vbscript-html";
// import scss from "../../../node_modules/highlight.js/lib/languages/scss";
// hljs.registerLanguage("javascript", javascript);
// hljs.registerLanguage("html", html);
// hljs.registerLanguage("scss", scss);
// hljs.highlightAll();
$(document).ready(function () {
  textblock = $("pre code").html();
  var lines = textblock.split("\n");
  lines.splice(0, 1);
  var newtext = lines.join("\n");
  $("pre code").html(newtext);

  $("pre code").each(function (i, block) {
    hljs.highlightBlock(block);
  });
});
