import Hero from "./hero";
import Menu from "./menu";
import Contact from "./contact";
import { removeChildren, tabContainer } from "../index";

export default function Navbar() {
  const nav = document.createElement("nav");
  const logo = document.createElement("h2");
  const navLinks = document.createElement("ul");
  const navHome = document.createElement("li");
  const navMenu = document.createElement("li");
  const navContact = document.createElement("li");
  logo.classList.add("nav__logo");
  navHome.textContent = "home";
  navMenu.textContent = "menu";
  navContact.textContent = "contact";

  navHome.classList.toggle("nav__active");
  const navLinksArray = [navHome, navMenu, navContact];

  logo.textContent = "Lola Mameng's";
  nav.appendChild(logo);
  navLinksArray.forEach((link) => navLinks.appendChild(link));

  const toggleActive = (currentTab) => {
    navLinksArray.forEach((link) => {
      if (link === currentTab) {
        currentTab.classList.add("nav__active");
      } else {
        link.classList.remove("nav__active");
      }
    });
  };
  nav.appendChild(navLinks);

  navHome.onclick = () => {
    removeChildren();
    toggleActive(navHome);
    tabContainer.append(Hero());
  };
  navMenu.onclick = () => {
    removeChildren();
    toggleActive(navMenu);
    tabContainer.append(Menu());
  };
  navContact.onclick = () => {
    removeChildren();
    toggleActive(navContact);
    tabContainer.append(Contact());
  };

  return nav;
}
