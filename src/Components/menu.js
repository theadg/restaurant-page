// Importing images for menu
import adobo from "../assets/adobo.jpg";
import sinigang from "../assets/sinigang.jpg";
import bistek from "../assets/bistek.jpg";
import MenuItem from "./menuItem";

// TODO: add styles
export default function Menu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");
  const menuSubHeader = document.createElement("p");
  menuSubHeader.textContent = "what's cooking ?";
  menuSubHeader.classList.add("menu__text--subheader");
  const menuHeader = document.createElement("h2");
  menuHeader.setAttribute("style", "white-space: pre;");
  menuHeader.textContent = "savor what the \r\nphilippines has to offer";
  menuHeader.classList.add("menu__header");

  const menuHeaderText = document.createElement("div");
  menuHeaderText.append(menuSubHeader, menuHeader);
  menuHeaderText.classList.add("menu__header--group");
  //   creating menu cards

  const Adobo = MenuItem(
    adobo,
    "Chicken Adobo",
    "Chicken pieces are marinated in soy sauce and spices, pan-fried, and stewed until tender."
  );

  const Sinigang = MenuItem(
    sinigang,
    "Pork Sinigang",
    "Pork soup in sour broth with okra, kangkong, eggplant, and string beans."
  );
  const BeefSteak = MenuItem(
    bistek,
    "Beef Steak",
    "Beef slices cooked in soy sauce with lemon and onions.  This is bistek tagalog. "
  );

  const menuItemGroup = document.createElement("div");
  menuItemGroup.classList.add("menu__item--group");
  menuItemGroup.append(Adobo, Sinigang, BeefSteak);
  menu.append(menuHeaderText, menuItemGroup);
  return menu;
}
