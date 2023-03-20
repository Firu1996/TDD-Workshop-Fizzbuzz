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

  //  should get '2' when input = 2

  //  should get 'Fizz' when input = 3

  //  should get 'Buzz' when input = 5

  //  should get 'Fizz' when input = 6

  //  should get 'Buzz' when input = 10

  //  should get 'FizzBuzz' when input = 15
});
