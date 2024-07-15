import openIcon from "./assets/icon-menu.svg";
import closeIcon from "./assets/icon-close.svg";

const toggleSidebarButton = document.querySelector("#toggleSidebar");
const toggleSidebarIcon = document.querySelector("#toggleSidebarIcon");
let hidden = true;

toggleSidebarButton.addEventListener("click", () => {
  if (hidden) {
    toggleSidebarIcon.setAttribute("src", closeIcon);
    hidden = false;
  } else {
    toggleSidebarIcon.setAttribute("src", openIcon);
    hidden = true;
  }
});
