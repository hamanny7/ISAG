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

//   <!-- ============= [SWIPER] ============ -->

// var swiper = new Swiper(".swiper-continer", {
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: "auto",

//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

//   <!-- ============= [HEADERLI] ============ -->

let headerli = document.querySelectorAll("header nav li");
let RascoGlitch = document.querySelectorAll(".Rasco-Glitch");
let sec = document.querySelectorAll(".sec");

headerli.forEach((element) => {
  element.addEventListener("click", function () {
    removeactiveli();
    element.classList.add("active");
  });
});

headerli[0].addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

headerli[1].addEventListener("click", function () {
  window.scrollTo({
    top: sec[0].offsetTop - 100,
    behavior: "smooth",
  });
});

headerli[2].addEventListener("click", function () {
  window.scrollTo({
    top: sec[1].offsetTop - 100,
    behavior: "smooth",
  });
});

headerli[3].addEventListener("click", function () {
  window.scrollTo({
    top: sec[2].offsetTop - 100,
    behavior: "smooth",
  });
});

headerli[4].addEventListener("click", function () {
  window.scrollTo({
    top: sec[3].offsetTop - 100,
    behavior: "smooth",
  });
});

for (let i = 0; i < RascoGlitch.length; i++) {
  RascoGlitch[i].addEventListener("click", function () {
    window.scrollTo({
      top: sec[4].offsetTop - 100,
      behavior: "smooth",
    });
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactiveli();
    headerli[0].classList.add("active");
  }

  if (window.scrollY >= sec[0].offsetTop - 200) {
    removeactiveli();
    headerli[1].classList.add("active");
  }

  if (window.scrollY >= sec[1].offsetTop - 200) {
    removeactiveli();
    headerli[2].classList.add("active");
  }

  if (window.scrollY >= sec[2].offsetTop - 200) {
    removeactiveli();
    headerli[3].classList.add("active");
  }
  if (window.scrollY >= sec[3].offsetTop - 200) {
    removeactiveli();
    headerli[4].classList.add("active");
  }
});

function removeactiveli() {
  headerli.forEach((element) => {
    element.classList.remove("active");
  });
}

//   <!-- ============= [WORKSEC] ============ -->

// let listWork = document.querySelectorAll(".list-Work li");
// let workg = document.querySelectorAll(".work-g");

// workg[0].classList.add("active");
// listWork[0].classList.add("active");
// listWork.forEach((element, index) => {
//   element.addEventListener("click", function () {
//     removeListWorkActive();
//     element.classList.add("active");
//     workg[index].classList.add("active");
//   });
// });

// function removeListWorkActive() {
//   listWork.forEach((element) => {
//     element.classList.remove("active");
//   });
//   workg.forEach((element) => {
//     element.classList.remove("active");
//   });
// }

//   <!-- ============= [YEAR DATE] ============ -->

let dateOfYear = new Date().getFullYear();
let yeardate = document.querySelectorAll(".year-date");
yeardate.forEach((element) => {
  element.innerHTML = dateOfYear;
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

// -------------

let navphoneli = document.querySelectorAll(".nav-phone li");

navphoneli.forEach((element) => {
  element.addEventListener("click", function () {
    removeactiveliphone();
    element.classList.add("active");
    liphone.classList.remove("active");
  });
});
navphoneli[0].addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

navphoneli[1].addEventListener("click", function () {
  window.scrollTo({
    top: sec[0].offsetTop - 100,
    behavior: "smooth",
  });
});

navphoneli[2].addEventListener("click", function () {
  window.scrollTo({
    top: sec[1].offsetTop - 100,
    behavior: "smooth",
  });
});

navphoneli[3].addEventListener("click", function () {
  window.scrollTo({
    top: sec[2].offsetTop - 100,
    behavior: "smooth",
  });
});

navphoneli[4].addEventListener("click", function () {
  window.scrollTo({
    top: sec[3].offsetTop - 100,
    behavior: "smooth",
  });
});

navphoneli[5].addEventListener("click", function () {
  window.scrollTo({
    top: sec[4].offsetTop - 100,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactiveliphone();
    navphoneli[0].classList.add("active");
  }

  if (window.scrollY >= sec[0].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[1].classList.add("active");
  }

  if (window.scrollY >= sec[1].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[2].classList.add("active");
  }

  if (window.scrollY >= sec[2].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[3].classList.add("active");
  }
  if (window.scrollY >= sec[3].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[4].classList.add("active");
  }
  if (window.scrollY >= sec[4].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[5].classList.add("active");
  }
});

function removeactiveliphone() {
  navphoneli.forEach((element) => {
    element.classList.remove("active");
  });
}

// <!-- ============= [ POINT ] ============ -->

let point = 0;
let pointslide = document.querySelectorAll(".point-slide");
let pointslidespan = document.querySelectorAll(".point-slide span");

let arraypointslidespan = Array.from(pointslidespan);

arraypointslidespan[0].classList.add("active");
arraypointslidespan.forEach((element) => {
  element.addEventListener("click", function () {
    removeactive();
    element.classList.add("active");
  });
});

arraypointslidespan[0].addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

arraypointslidespan[1].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[0].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[2].addEventListener("click", function () {
  window.scrollTo({
    top: sec[1].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[3].addEventListener("click", function () {
  window.scrollTo({
    top: sec[2].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[4].addEventListener("click", function () {
  window.scrollTo({
    top: sec[3].offsetTop - 100,
    behavior: "smooth",
  });
});

function removeactive() {
  pointslidespan.forEach((element) => {
    element.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactive();
    sec[0].classList.add("active");
  }

  if (window.scrollY >= sec[0].offsetTop - 200) {
    removeactive();
    sec[1].classList.add("active");
  }

  if (window.scrollY >= sec[1].offsetTop - 200) {
    removeactive();
    sec[2].classList.add("active");
  }

  if (window.scrollY >= sec[2].offsetTop - 200) {
    removeactive();
    sec[3].classList.add("active");
  }
  if (window.scrollY >= sec[3].offsetTop - 200) {
    removeactive();
    sec[4].classList.add("active");
  }
});

// <!-- ============= [ POINT ] ============ -->

let butemail = document.querySelector(".but-email");
let emailinput = document.querySelector(".email-input");
let emailform = document.querySelector("#email");
console.log(emailform);

butemail.addEventListener("click", function (e) {
  e.preventDefault()
  emailform.value = emailinput.value;
});

butemail.addEventListener("click", function () {
  window.scrollTo({
    top: sec[4].offsetTop - 100,
    behavior: "smooth",
  });
});
