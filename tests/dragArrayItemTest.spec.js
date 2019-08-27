import {dragArrayItem} from '../src/common/index'

describe("Drag array item function", () => {
  test("it should change array'e elements position by drag and drop indexes", () => {
    const inputArray = [1,2,3,4,5];
    expect(dragArrayItem(inputArray, 0, 0)).toEqual(inputArray);
    expect(dragArrayItem(inputArray, 3, 3)).toEqual(inputArray);
    expect(dragArrayItem(inputArray, 0, 1)).toEqual([2,1,3,4,5]);
    expect(dragArrayItem(inputArray, 0, 4)).toEqual([2,3,4,5,1]);
    expect(dragArrayItem(inputArray, 3, 1)).toEqual([1,4,2,3,5]);
    expect(dragArrayItem(inputArray, 4, 2)).toEqual([1,2,5,3,4]);

  });
});