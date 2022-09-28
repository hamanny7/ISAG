//   <!-- ============= [ARWWO] ============ -->

let arwwo = document.querySelector(".arwwo");
let whatsapp = document.querySelector(".whatsapp");

arwwo.classList.remove("active");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    arwwo.classList.add("active");
  } else {
    arwwo.classList.remove("active");
  }
});
arwwo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

whatsapp.classList.remove("active");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    whatsapp.classList.add("active");
  } else {
    whatsapp.classList.remove("active");
  }
});


//   <!-- ============= [LIPHONE] ============ -->

let liphone = document.querySelector(".li-phone");
let closeicophone = document.querySelector(".close-ico-phone");

let tooglei = document.querySelector(".toogle-i");
tooglei.addEventListener("click", function () {
  liphone.classList.add("active");
});
closeicophone.addEventListener("click", function () {
  liphone.classList.remove("active");
});