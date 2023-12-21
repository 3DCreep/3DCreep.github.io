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
