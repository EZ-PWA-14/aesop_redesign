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
let searchBt = document.querySelector(".nav01 .searchBt");
let searchModal = document.querySelector(".search_modal");
let banner = document.querySelector(".banner");
let nav = document.querySelector("nav");
let navServices = document.querySelectorAll(".nav_set span");
let searchClose = document.querySelector(".nav01 .search_close");
let searchLogoBox = document.querySelector("#logo_box");
let searchLogoImg = document.querySelector("#logo_img");


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



let styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

searchBt.onclick = () => {

  if (logModal.classList.contains("show")) {
    logModal.classList.remove("show");
  }

  banner.style.display = "none";
  nav.style.marginTop = "40px";
  nav.style.backgroundImage = "linear-gradient(180deg, #393734 0%, rgba(57, 55, 52, 0.00) 0%)";
  navServices.forEach(span => {
    span.style.color = "#000";
    span.style.fontSize = "17px";
  });
  searchLogoImg.src = "/portfolio01_redesign/aesop/img/Aesop_logo_2013_black.svg";
  searchClose.style.display = "block";
  searchModal.classList.add("show");
  modalBack.style.zIndex = "80";
  modalBack.style.display = "block";
  document.body.style.overflow = "hidden";
  searchLogoBox.style.top = "45%";

  styleSheet.innerHTML = ".nav_set span:hover { color: #000 !important; -webkit-text-stroke: 0.5px #000 !important; }";
};


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
  searchLogoBox.style.top = "60%";
};



modalBack.onclick = () => {
  if (searchModal.classList.contains("show")) {
    searchClose.onclick();
  }
  if (logModal.classList.contains("show")) {
    logClose.onclick();
  }
};

// modalBack.onclick = () => {
//   searchModal.classList.remove("show");
//   modalBack.classList.remove("show");
//   document.body.style.overflow = "";
// };