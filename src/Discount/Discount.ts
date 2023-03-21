import axios from "axios";

export const calculateDiscount = async (
  productName: string,
  qty: number,
  price: number
) => {
  const responseDiscount = await axios.get(
    `/discount?quantity=${qty}&product-name=${productName}`
  );
  const discount = responseDiscount.data.discount;
  const newAmount = price - (price * discount) / 100;
  const response = {
    productName: productName,
    qty: qty,
    price: price,
    discount: discount,
    netAmount: newAmount,
  };
  return response;
};
