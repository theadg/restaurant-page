import "./styles/main.scss";
// import adobo from "./assets/adobo.jpg";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";

const container = document.querySelector("#content");
export const tabContainer = document.createElement("div");
tabContainer.id = "tabContainer";
container.appendChild(Navbar());
tabContainer.appendChild(Hero());
container.appendChild(tabContainer);

export function removeChildren() {
  while (tabContainer.lastChild) {
    tabContainer.removeChild(tabContainer.firstChild);
  }
}
