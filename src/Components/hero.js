import heroImg from "../assets/hero_image.svg";

export default function Hero() {
  const heroSection = document.createElement("section");
  const heroText = document.createElement("h1");
  const heroDesc = document.createElement("p");
  heroText.setAttribute("style", "white-space: pre;");
  heroText.textContent = "good food \r\ntastes like home";
  heroDesc.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc augue, condimentum non porttitor id, interdum sit amet sem. ";

  const heroOrderNow = document.createElement("button");
  heroOrderNow.textContent = "order now";
  const heroViewMenu = document.createElement("button");
  heroViewMenu.textContent = "view menu";

  const heroTextContent = document.createElement("div");
  heroTextContent.classList.add("hero__text--content");

  const heroButtons = document.createElement("div");
  heroButtons.append(heroOrderNow, heroViewMenu);
  heroButtons.classList.add("hero__button--container");
  heroSection.classList.add("hero");
  heroText.classList.add("hero__text--main");
  heroDesc.classList.add("hero__text");
  heroOrderNow.classList.add("hero__button", "hero__button--primary");
  heroViewMenu.classList.add("hero__button");

  const heroImage = new Image();
  heroImage.classList.add("hero__image");
  heroImage.src = heroImg;

  heroTextContent.append(heroText, heroDesc, heroButtons);
  heroSection.append(heroTextContent, heroImage);

  return heroSection;
}
