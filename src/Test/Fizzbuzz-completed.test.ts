import { fizzbuzz } from "../Fizzbuzz/Fizzbuzz";

describe("FizzBuzz Completed", () => {
  it("should get '1' when input = 1", () => {
    //Arrange
    const expectedResult: string = "1";
    const input = 1;

    //Act
    const actualResult = fizzbuzz(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should get '2' when input = 2", () => {
    //Arrange
    const expectedResult: string = "2";
    const input = 2;

    //Act
    const actualResult = fizzbuzz(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should get 'Fizz' when input = 3", () => {
    //Arrange
    const expectedResult: string = "Fizz";
    const input = 3;

    //Act
    const actualResult = fizzbuzz(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should get 'Buzz' when input = 5", () => {
    //Arrange
    const expectedResult: string = "Buzz";
    const input = 5;

    //Act
    const actualResult = fizzbuzz(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should get 'Fizz' when input = 6", () => {
    //Arrange
    const expectedResult: string = "Fizz";
    const input = 6;

    //Act
    const actualResult = fizzbuzz(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should get 'Buzz' when input = 10", () => {
    //Arrange
    const expectedResult: string = "Buzz";
    const input = 10;

    //Act
    const actualResult = fizzbuzz(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should get 'FizzBuzz' when input = 15", () => {
    //Arrange
    const expectedResult: string = "FizzBuzz";
    const input = 15;

    //Act
    const actualResult = fizzbuzz(input);

    //Assert
    expect(actualResult).toEqual(expectedResult);
  });
});
