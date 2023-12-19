const CardType = {
  VISA: "VISA",
  MASTERCARD: "MASTERCARD",
  RUPAY: "RUPAY",
};

export const getCarrierConfig = (type) => {
  switch (type) {
    case CardType.VISA:
      return {
        backgroundColor: "#04081c",
        logoImg: "./images/visa.jpeg",
      };
    case CardType.MASTERCARD:
      return {
        backgroundColor: "#2e1208",
        logoImg: "./images/masterCard.png",
      };
    case CardType.RUPAY:
      return {
        backgroundColor: "#1c1c19",
        logoImg: "./images/rupay.png",
      };
  }
};

export const cardsData = [
  {
    cardId: CardType.VISA,
    userName: "john Smith",
    expiry: "12/20",
    cardNumber: "512312323132123",
  },
  {
    cardId: CardType.MASTERCARD,
    userName: "Amman Kapoor",
    expiry: "1/20",
    cardNumber: "112312323132120",
  },
  {
    cardId: CardType.VISA,
    userName: "Varun Bhar",
    expiry: "12/20",
    cardNumber: "1024512323132120",
  },
  {
    cardId: CardType.MASTERCARD,
    userName: "Vikas Mishra",
    expiry: "12/20",
    cardNumber: "1024232323132120",
  },
  {
    cardId: CardType.RUPAY,
    userName: "Akanksha Sood",
    expiry: "4/24",
    cardNumber: "1024512343132120",
  },
  {
    cardId: CardType.RUPAY,
    userName: "Shoiab khan",
    expiry: "5/24",
    cardNumber: "1022512323132120",
  },
  {
    cardId: CardType.VISA,
    userName: "Tejas Patel",
    expiry: "7/29",
    cardNumber: "1024412323132120",
  },
];
