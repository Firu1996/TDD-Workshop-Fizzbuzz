import axios from "axios";
import { calculateDiscount } from "../Discount/Discount";
import MockAdapter from "axios-mock-adapter";

describe("Discount", () => {
  it("get discount 10% when buy 1 shoe", async () => {
    //arrange
    const mock = new MockAdapter(axios);
    const expectedResponse = {
      productName: "รองเท้า",
      qty: 1,
      price: 1000,
      discount: 10,
      netAmount: 900,
    };
    const productName = "รองเท้า";
    const qty = 1;
    const price = 1000;
    mock
      .onGet(`/discount?quantity=${qty}&product-name=${productName}`)
      .reply(200, {
        discount: 10,
      });

    //act
    const productResponse = await calculateDiscount(productName, qty, price);

    //assert
    expect(productResponse).toEqual(expectedResponse);
  });

  it("get discount 20% when buy 2 shoes", async () => {
    //arrange
    const mock = new MockAdapter(axios);
    const expectedResponse = {
      productName: "รองเท้า",
      qty: 2,
      price: 2000,
      discount: 20,
      netAmount: 1600,
    };
    const productName = "รองเท้า";
    const qty = 2;
    const price = 2000;
    mock
      .onGet(`/discount?quantity=${qty}&product-name=${productName}`)
      .reply(200, {
        discount: 20,
      });

    //act
    const productResponse = await calculateDiscount(productName, qty, price);

    //assert
    expect(productResponse).toEqual(expectedResponse);
  });

  it("get discount 30% when buy 3 shoes", async () => {
    //arrange
    const mock = new MockAdapter(axios);
    const expectedResponse = {
      productName: "รองเท้า",
      qty: 3,
      price: 3000,
      discount: 30,
      netAmount: 2100,
    };
    const productName = "รองเท้า";
    const qty = 3;
    const price = 3000;
    mock
      .onGet(`/discount?quantity=${qty}&product-name=${productName}`)
      .reply(200, {
        discount: 30,
      });

    //act
    const productResponse = await calculateDiscount(productName, qty, price);

    //assert
    expect(productResponse).toEqual(expectedResponse);
  });

  it("get discount 30% when buy more than 4 shoes", async () => {
    //arrange
    const mock = new MockAdapter(axios);
    const expectedResponse = {
      productName: "รองเท้า",
      qty: 4,
      price: 4000,
      discount: 30,
      netAmount: 2800,
    };
    const productName = "รองเท้า";
    const qty = 4;
    const price = 4000;
    mock
      .onGet(`/discount?quantity=${qty}&product-name=${productName}`)
      .reply(200, {
        discount: 30,
      });

    //act
    const productResponse = await calculateDiscount(productName, qty, price);

    //assert
    expect(productResponse).toEqual(expectedResponse);
  });
});
