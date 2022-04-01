const interest_btn = document.getElementById("int-btn");
const hobbies_btn = document.getElementById("hob-btn");
const interest_sec = document.getElementById("interest");
const hobbies_sec = document.getElementById("hobbies");
const collapse = document.getElementById("collapse");
let int_flag = false;
let hob_flag = false;

interest_btn.addEventListener("click", function () {
  hobbies_sec.classList.add("hide");
  interest_sec.classList.remove("hide");
  interest_btn.classList.add("hide");
  hobbies_btn.classList.remove("hide");
  collapse.classList.remove("hide");
});

hobbies_btn.addEventListener("click", function () {
  interest_sec.classList.add("hide");
  hobbies_sec.classList.remove("hide");
  hobbies_btn.classList.add("hide");
  interest_btn.classList.remove("hide");
  collapse.classList.remove("hide");
});

collapse.addEventListener("click", function () {
  interest_sec.classList.add("hide");
  interest_btn.classList.remove("hide");
  hobbies_btn.classList.remove("hide");
  hobbies_sec.classList.add("hide");
  collapse.classList.add("hide");
});
