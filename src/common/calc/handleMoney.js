export const convertMoneyToNumber = (price) => {
  let productNotHandle = price;
  let productHandleUnit, productHandleDot1, productHandleDot2;
  //Loại ₫ và dấu .
  if (productNotHandle.includes(" ₫"))
    productHandleUnit = productNotHandle.replace(" ₫", "");
  if (productHandleUnit.includes("."))
    productHandleDot1 = productHandleUnit.replace(".", "");
  if (productHandleDot1.includes(".")) {
    productHandleDot2 = productHandleDot1.replace(".", "");
  } else {
    productHandleDot2 = productHandleDot1;
  }

  let finalPrice = productHandleDot2;
  return finalPrice;
};

export const convertMoneyToVND = (price) => {
  //Chuyển về dạng string và thêm ₫ và dấu .
  let priceToString = price.toString();
  let priceAddDot = "",
    count = 0;
  for (let i = priceToString.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && count !== 0) priceAddDot += ".";
    priceAddDot += priceToString[i];
    ++count;
  }
  let finalPriceAddDot = "";
  for (let i = priceAddDot.length - 1; i >= 0; i--) {
    finalPriceAddDot += priceAddDot[i];
  }
  let finalPrice = finalPriceAddDot + " ₫";

  return finalPrice;
};

export const randomMoneyInPriceNotSale = (price) => {
  let convertPriceToNumber = Number(price);
  let randomPrice, roundPrice;
  if (convertPriceToNumber < 1000000) {
    randomPrice = convertPriceToNumber * 1.5;
    roundPrice = Math.round(randomPrice / 10000) * 10000 - 10000;
  }
  if (convertPriceToNumber >= 1000000 && convertPriceToNumber < 10000000) {
    randomPrice = convertPriceToNumber * 1.35;
    roundPrice = Math.round(randomPrice / 100000) * 100000 - 10000;
  }
  if (convertPriceToNumber >= 10000000) {
    randomPrice = convertPriceToNumber * 1.15;
    roundPrice = Math.round(randomPrice / 100000) * 100000 - 10000;
  }

  return roundPrice;
};
