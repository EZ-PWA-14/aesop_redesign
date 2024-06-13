// 모바일 햄버거 버튼
let hamMenu = document.querySelector(".ham");
let navMenu = document.querySelector(".nav_menu_set");
let navClose = document.querySelector(".nav_close");

// nav_menu_set이 자연스럽게 dissolve
hamMenu.onclick = () => {
  navMenu.classList.add("show");
};
navClose.onclick = () => {
  navMenu.classList.remove("show");
};
// nav_menu_set이 위에서 아래로 떨어지는
// hamMenu.onclick = () => {
//   navMenu.style.transform = "translateY(0%)";
// };
// navClose.onclick = () => {
//   navMenu.style.transform = "translateY(-180%)";
// };

let logBt = document.querySelector(".nav02 .log");
let logModal = document.querySelector(".log_modal");
let logClose = document.querySelector(".log_close");
let modalBack = document.querySelector(".modal_background");
// let searchBts = document.querySelectorAll(".searchBt");

let searchBt = document.querySelector(".nav01 .searchBt");

let searchModal = document.querySelector(".search_modal");
let banner = document.querySelector(".banner");
let nav = document.querySelector("nav");
let navServices = document.querySelectorAll(".nav_set span");
let searchClose = document.querySelector(".nav01 .search_close");
let searchLogoBox = document.querySelector("#logo_box");
let searchLogoImg = document.querySelector("#logo_img");
let navMeneM = document.querySelector(".nav_menu_m");
let searchBtM = document.querySelector("#searchBtM");
let searchCloseM = document.querySelector("#search_close_m");
let windowWidth = window.innerWidth;
let isClicked = false;
let isCloseClicked = false;


logBt.onclick = () => {

  if (searchModal.classList.contains("show")) {
    searchClose.onclick();
  }

  logModal.classList.add("show");
  modalBack.style.display = "block";
  document.body.style.overflow = "hidden";
};

logClose.onclick = () => {
  logModal.classList.remove("show");
  modalBack.style.display = "none";
  document.body.style.overflow = "";
};


// window.addEventListener('resize', function () {
//   windowWidth = window.innerWidth;

//   if (windowWidth >= 640) {
//     navMeneM.style.display = 'none';
//     searchCloseM.style.display = 'none';
//   } else {
//     navMeneM.style.display = 'flex';
//     if (!isClicked) {
//       searchCloseM.style.display = 'none';
//       navMeneM.style.display = "none";
//     }
//   }

//   if (windowWidth <= 640 && isClicked && !isCloseClicked) {
//     searchCloseM.style.display = 'block';
//   }
// });


window.addEventListener('resize', function () {
  windowWidth = window.innerWidth;

  if (windowWidth >= 640) {
    navMeneM.style.display = 'none';
    searchCloseM.style.display = 'none';
  } else {
    navMeneM.style.display = 'flex';
    searchCloseM.style.display = 'block';
  }
});



let styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

// searchBts.forEach(searchBt => {

searchBt.onclick = () => {

  isClicked = true;

  if (logModal.classList.contains("show")) {
    logModal.classList.remove("show");
  }

  banner.style.display = "none";
  nav.style.marginTop = "40px";
  nav.style.backgroundImage = "linear-gradient(180deg, #393734 0%, rgba(57, 55, 52, 0.00) 0%)";
  navServices.forEach(span => {
    span.style.color = "#000";
    // span.style.fontSize = "17px";
  });
  searchLogoImg.src = "/portfolio01_redesign/aesop/img/Aesop_logo_2013_black.svg";
  searchClose.style.display = "block";
  searchModal.classList.add("show");
  modalBack.style.zIndex = "80";
  modalBack.style.display = "block";
  document.body.style.overflow = "hidden";
  searchLogoBox.style.top = "50%";
  navMeneM.style.display = "none";
  // searchCloseM.style.display = "block";

  styleSheet.innerHTML = ".nav_set span:hover { color: #000 !important; -webkit-text-stroke: 0.5px #000 !important; }";
};
// });

searchClose.onclick = () => {
  banner.style.display = "";
  nav.style.marginTop = "";
  nav.style.backgroundImage = "";
  navServices.forEach(span => {
    span.style.color = "";
  });
  searchLogoImg.src = "/portfolio01_redesign/aesop/img/Aesop_logo_2013.svg";
  searchClose.style.display = "none";
  searchModal.classList.remove("show");
  modalBack.style.zIndex = "";
  modalBack.style.display = "none";
  document.body.style.overflow = "";
  searchLogoBox.style.top = "50%";
  searchLogoBox.style.display = "";
};

searchBtM.onclick = () => {

  if (logModal.classList.contains("show")) {
    logModal.classList.remove("show");
  }

  banner.style.display = "none";
  nav.style.marginTop = "40px";
  nav.style.backgroundImage = "linear-gradient(180deg, #393734 0%, rgba(57, 55, 52, 0.00) 0%)";
  navMeneM.style.display = "none";
  searchLogoImg.src = "/portfolio01_redesign/aesop/img/Aesop_logo_2013_black.svg";
  searchCloseM.style.display = "block";
  searchModal.classList.add("show");
  searchLogoBox.style.top = "50%";
};

searchCloseM.onclick = () => {

  isCloseClicked = true;

  banner.style.display = "";
  nav.style.marginTop = "";
  nav.style.backgroundImage = "";
  navServices.forEach(span => {
    span.style.color = "";
  });
  searchLogoImg.src = "/portfolio01_redesign/aesop/img/Aesop_logo_2013.svg";
  searchClose.style.display = "none";
  searchCloseM.style.display = "none";
  searchModal.classList.remove("show");
  modalBack.style.zIndex = "";
  modalBack.style.display = "none";
  document.body.style.overflow = "";
  searchLogoBox.style.top = "50%";
  navMeneM.style.display = 'flex';

};


modalBack.onclick = () => {
  if (searchModal.classList.contains("show")) {
    searchClose.onclick();
  }
  if (logModal.classList.contains("show")) {
    logClose.onclick();
  }
};
