let text =
  "Hello! Name’s Alex. I’m a minimalistic designer and a programmer with little to no experience. Also I enjoy computer games and science, especially chemistry. This website was made as a place where I can share about my feelings and thoughts and as another way of training.";

let split_text = text.split("");
console.log(split_text);

document.addEventListener("DOMContentLoaded", put_text(), false);
async function put_text() {
  await sleep(1000);
  for (let el of split_text) {
    await sleep(20);
    $("#greeting_text").append(el);
  }
}
// for (let el of split_text) {
//   sleep(30000);
//   $("#greeting_text").append(el);
// }
async function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
