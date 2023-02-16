const processArray = require("../index");

describe("Тесты функции обработки массива", () => {
  let array;
  beforeAll(() => {
    array = [];
  });
  describe("Общие тесты", () => {
    test("Возвращает ли функция массив", () => {
      expect(Array.isArray(processArray(array))).toBe(true);
    });
    test("Возвращает ли функция пустой массив при передаче его в эту функцию", () => {
      expect(processArray(array)).toEqual([]);
    });
  });

  describe("Функциональные тесты", () => {
    beforeEach(() => {
      array = [1, 2, 1, 2, 2, 3, 4];
    });
    test("Удаляет ли функция повторяющиеся значени", () => {
      expect(processArray(array)).toEqual([1, 2, 3, 4]);
    });
    test("Заменяет ли функция отрицательные значения на *", () => {
      array.push(-2);
      expect(processArray(array)).toContain("*");
    });
    test("Заменяет ли функция все отрицательные значения на *", () => {
      array.push(...[-2, 4, -3]);
      expect(processArray(array)).toEqual([1, 2, 3, 4, "*", "*"]);
    });
  });
});
