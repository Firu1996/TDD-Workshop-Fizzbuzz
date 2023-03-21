import { CheckEvenOdd } from "../CheckEvenOdd/CheckEvenOdd";

describe("Check number EVEN or ODD", () => {
  it("should return ODD when input was 1", () => {
    //Arrange
    const expectedResult: string = "ODD";
    const input = 1;

    //Act
    const actualResult = CheckEvenOdd(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return EVEN when input was 2", () => {
    //Arrange
    const expectedResult: string = "EVEN";
    const input = 2;

    //Act
    const actualResult = CheckEvenOdd(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return ODD when input was 3", () => {
    //Arrange
    const expectedResult: string = "ODD";
    const input = 3;

    //Act
    const actualResult = CheckEvenOdd(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return EVEN when input was 4", () => {
    //Arrange
    const expectedResult: string = "EVEN";
    const input = 4;

    //Act
    const actualResult = CheckEvenOdd(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });
});
