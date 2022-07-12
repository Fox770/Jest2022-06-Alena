import { fullTrim, nameIsValid } from '../src/homework3';

describe('Тесирование функций из Homework3', () => {

  /**
   * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
   * которая удаляет пробелы и табуляторы в начале и конце строки.
   */

  //тестируем, что функция успешно импортировалась 
  test('Проверяем fullTrim определяется', () => {
    expect(fullTrim).toBeDefined();
  });

  test('Проверяем fullTrim функция', () => {
    expect(typeof fullTrim).toBe('function');
  });
  //тесируем удаление пробелов
  test('Проверяем fullTrim для пробела в начале слова', () => {
    expect(fullTrim(' Это домашка')).toEqual('Это домашка');
  });
  test('Проверяем fullTrim для пробела в конце слова', () => {
    expect(fullTrim('Это домашка ')).toEqual('Это домашка');
  });
  test('Проверяем fullTrim для пробела в середине слова', () => {
    expect(fullTrim('Это домашка')).toEqual('Это домашка');
  });
  test('Проверяем fullTrim для одних пробелов', () => {
    expect(fullTrim(' ')).toEqual('');
  });

  //тесируем удаление табуляции
  test('Проверяем fullTrim для табуляции в начале слова', () => {
    expect(fullTrim(' Это домашка')).toEqual('Это домашка');
  });
  test('Проверяем fullTrim для табуляции в конце слова', () => {
    expect(fullTrim('Это домашка  ')).toEqual('Это домашка');
  });
  test('Проверяем fullTrim для табуляции в середине слова', () => {
    expect(fullTrim('Это  домашка')).toEqual('Это  домашка');
  });
  test('Проверяем fullTrim для одних табов', () => {
    expect(fullTrim(' ')).toEqual('');
  });

  /**
   * Напишите параметризированный unit (describe.each`table`) тест для функции,
   * которая проверяет валидность кличек котиков.
   * Кличка считается валидной, если она соответствует следующим условиям:
   * 1) Кличка содержит минимум два символа;
   * 2) Кличка не пустая;
   * 3) Кличка не содержит пробелов.

   Обратите внимание, в примере приведен обычный тест.
   Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
   */

   test('Проверяем nameIsValid определяется', () => {
    expect(nameIsValid).toBeDefined();
  });

  test('Проверяем nameIsValid функция', () => {
    expect(typeof nameIsValid).toBe('function');
  });

  test('Передать валидную кличку', () => {
    expect(nameIsValid('Имя')).toEqual(true);
  });



test('Передать невалидную кличку', () => {
  expect(nameIsValid('h')).toEqual(false);
});


test.each`
  name    | expected
  ${'cat'} | ${true} {}
  ${'ca'} | ${true}
  ${'kitty1'} | ${true}
  ${'kit@#$ty1'} | ${true}
  ${'k'} | ${false}
  ${'black cat'} | ${false}
  ${'  '} | ${false}
`('nickname $name is $expected', ({name, expected}) => {
  expect(nameIsValid(name)).toBe(expected);
});
});