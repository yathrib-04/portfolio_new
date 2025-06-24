const menuList = document.getElementById("overlay");
const menuButton = document.getElementById("menu-button");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuItems = document.querySelectorAll(".mobile-menu-item");

function menuEventHandler() {
  menuList.classList.toggle("hidden");
  menuIcons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
}
menuButton.addEventListener("click", menuEventHandler);
menuItems.forEach((menu) => {
  menu.addEventListener("click", menuEventHandler);
});
