import { cardsData, getCarrierConfig } from "./data.js";
import { getHTMLNode, formatCardNumber } from "./util.js";

const carouselEle = document.getElementById("carousel");
const leftHandleEle = document.getElementById("leftHandle");
const rightHandleEle = document.getElementById("rightHandle");

class Carousel {
  constructor(carouselEle, config) {
    const {
      cardsData,
      leftHandler,
      rightHandler,
      isInfinite = true,
      selected = 0,
    } = config;

    this.carousel = carouselEle;
    this.cardsData = cardsData;
    this.leftHandler = leftHandler;
    this.rightHandler = rightHandler;
    this.selected = selected;
    this.isInfinite = isInfinite;

    this.renderCards();
    this.addListener();
    this.setSelection();
  }

  renderCards() {
    const cardMainContainer = getHTMLNode("div", "card-main");
    this.cardsData.forEach((cardInfo) => {
      const card = this.getCardComponent(cardInfo);
      cardMainContainer.appendChild(card);
    });

    this.carousel.append(cardMainContainer);
  }

  getCardComponent(cardInfo) {
    const { cardId, userName, expiry, cardNumber } = cardInfo;
    const { backgroundColor, logoImg } = getCarrierConfig(cardId);
    const cardContainer = getHTMLNode("div", "card");
    cardContainer.style.background = backgroundColor;
    const logoImgView = getHTMLNode("img", "logo-img");
    logoImgView.src = logoImg;
    const cardNumberView = getHTMLNode(
      "div",
      "card-num",
      formatCardNumber(cardNumber)
    );
    const cardHolder = getHTMLNode("div", "card-holder", userName);
    const cardExpiry = getHTMLNode("div", "card-expiry", expiry);
    cardContainer.append(logoImgView, cardNumberView, cardHolder, cardExpiry);
    return cardContainer;
  }

  addListener() {
    this.leftHandler.addEventListener("click", this.swipeLeft.bind(this));
    this.rightHandler.addEventListener("click", this.swipeRight.bind(this));
  }

  swipeLeft() {
    if (this.selected === 0 && !this.isInfinite) {
      return;
    }
    this.selected -= 1;
    if (this.selected < 0) {
      this.selected += this.cardsData.length;
    }
    this.setSelection();
  }

  swipeRight() {
    if (this.selected === this.cardsData.length - 1 && !this.isInfinite) {
      return;
    }
    this.selected += 1;
    this.selected %= this.cardsData.length;
    this.setSelection();
  }

  setSelection() {
    const cardContainer = this.carousel.querySelector(".card-main");
    cardContainer.style.transform = `translateX(${400 * -this.selected}px)`;
    this.setHandler();
  }

  setHandler() {
    if (this.isInfinite) {
      this.disableHandles({
        isLeftDisabled: false,
        isRightDisabled: false,
      });
    } else {
      this.disableHandles({
        isLeftDisabled: this.selected === 0,
        isRightDisabled: this.selected === this.cardsData.length - 1,
      });
    }
  }

  disableHandles({ isLeftDisabled, isRightDisabled }) {
    this.leftHandler.disabled = isLeftDisabled;
    this.rightHandler.disabled = isRightDisabled;
  }
}

new Carousel(carouselEle, {
  cardsData,
  selected: 2,
  leftHandler: leftHandleEle,
  rightHandler: rightHandleEle,
  isInfinite: true,
});
