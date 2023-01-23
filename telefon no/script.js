let check = document.querySelector(".check");
let number = document.querySelector(".number");
let text = document.querySelector(".text");

let ragex = /^\(?([5]{1})\)?([0-9]{9})$/;

check.addEventListener("click", () => {
  if (number.value == "") {
    text.innerText = "Lütfen telefon numaranızı giriniz.";
  } else if (number.value.match(ragex)) {
    text.innerText = "Tebrikler numara doğru!";
  } else {
    text.innerText = "Lütfen 5 ile başlayan 10 haneli numara giriniz.";
  }
});
