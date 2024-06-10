let hamMenu = document.querySelector(".ham");
let navMenu = document.querySelector(".nav_menu_set");
let navClose = document.querySelector(".nav_close");

// nav_menu_set이 위에서 아래로 떨어지는
// hamMenu.onclick = () => {
//   navMenu.style.transform = "translateY(0%)";
// };
// navClose.onclick = () => {
//   navMenu.style.transform = "translateY(-180%)";
// };

// nav_menu_set이 자연스럽게 dissolve
hamMenu.onclick = () => {
  navMenu.classList.add("show");
};
navClose.onclick = () => {
  navMenu.classList.remove("show");
};


// let navServices = document.querySelectorAll(".nav_menu > span:not(.serch)");

// navServices.forEach(navService => {
//   let navArrow = navService.querySelector(".arrow");

//   navService.addEventListener('mouseover', () => {
//     navArrow.style.display = 'block';
//   });

//   navService.addEventListener('mouseout', () => {
//     navArrow.style.display = 'none';
//   });
// });
