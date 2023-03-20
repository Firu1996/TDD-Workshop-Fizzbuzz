import { fizzbuzz } from "../Fizzbuzz/Fizzbuzz";

describe("FizzBuzz", () => {
  it("should get '1' when input = 1", () => {
    //Arrange
    const expectedResult: string = "1";
    const input = 1;

    //Act
    const actualResult = fizzbuzz(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });
});
