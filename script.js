var contentEle = document.body.querySelector(".content");

function removeButt() {
  contentEle.innereHTML= ""
}

function buyButt() {
  contentEle.innerHTML=""
  contentEle.innerHTML="Purchased"
}
document.body.querySelector(".removeButt").addEventListener("click", function () {
  removeButt();
});

document.body
  .querySelector(".buyButt")
  .addEventListener("click", function () {
    buyButt();
  });