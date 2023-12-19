export const getHTMLNode = (nodeType, className, textNode) => {
  const node = document.createElement(nodeType);
  if (className) {
    node.classList.add(className);
  }
  if (textNode) {
    node.textContent = textNode;
  }
  return node;
};

export const formatCardNumber = (cardNumber) => {
  const filteredNumber = cardNumber.split(" ").join("").slice(0, 16);
  let formattedNumber = "";
  for (let i = 0; i < filteredNumber.length; i++) {
    formattedNumber += filteredNumber[i];
    if ((i + 1) % 4 === 0 && i + 1 !== filteredNumber.length) {
      formattedNumber += " ";
    }
  }
  return formattedNumber;
};
