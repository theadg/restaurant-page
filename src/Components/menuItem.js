export default function MenuItem(dishImage, dishName, dishDesc) {
  //
  const menuCard = document.createElement("article");
  menuCard.classList.add("menu__item");
  const menuCardImg = new Image();
  menuCardImg.classList.add("menu__image");
  menuCardImg.src = dishImage;

  const menuCardHeader = document.createElement("h2");
  menuCardHeader.textContent = dishName;
  menuCardHeader.classList.add("menu__text", "menu__text--header");
  const menuCardDesc = document.createElement("p");
  menuCardDesc.classList.add("menu__text");
  menuCardDesc.textContent = dishDesc;

  const menuCardTextGroup = document.createElement("div");

  //   use the ff: in every card
  //   grouping of buttons
  const menuCardButtons = document.createElement("div");
  menuCardButtons.classList.add("menu__button--group");
  const menuCardOrder = document.createElement("button");
  menuCardOrder.textContent = "order";
  menuCardOrder.classList.add("hero__button");
  const menuCardCart = document.createElement("button");
  menuCardCart.classList.add("hero__button");
  menuCardCart.textContent = "cart";
  menuCardTextGroup.append(menuCardHeader, menuCardDesc);
  menuCardButtons.append(menuCardOrder, menuCardCart);
  menuCardTextGroup.classList.add("menu__text--group");
  menuCard.append(menuCardImg, menuCardTextGroup, menuCardButtons);

  return menuCard;
}
