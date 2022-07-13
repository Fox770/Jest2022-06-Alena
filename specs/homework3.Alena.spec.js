import { fullTrim, nameIsValid } from '../src/homework3';
//проверяем пробелы и табы
describe('My homework', () => {
    test('Проверяем fullTrim определяется', () => {
    expect(fullTrim).toBeDefined();
  });
     test('Проверяем fullTrim это функция', () => {
    expect(typeof fullTrim).toBe('function');
  });
     test('Проверяем тримминг для пробела в начале слова', () => {
    expect(fullTrim(' My homework')).toEqual('My homework');
  });
    test('Проверяем тримминг для пробела в конце слова', () => {
    expect(fullTrim('My homework ')).toEqual('My homework');
  });
    test('Проверяем тримминг для пробела в середине слова', () => {
    expect(fullTrim('My homework')).toEqual('My homework');
  });
    test('Проверяем fullTrim для одних пробелов', () => {
    expect(fullTrim(' ')).toEqual('');
  });
    test('Проверяем fullTrim для табуляции в начале слова', () => {
    expect(fullTrim('   My homework')).toEqual('My homework');
  });
    test('Проверяем fullTrim для табуляции в конце слова', () => {
    expect(fullTrim('My homework    ')).toEqual('My homework');
  });
    test('Проверяем fullTrim для табуляции в середине слова', () => {
    expect(fullTrim('My homework')).toEqual('My homework');
  });
    test('Проверяем fullTrim для одних табов', () => {
    expect(fullTrim('  ')).toEqual('');
  });
});
//НЕпараметризированный unit test
describe('Проверяем Клички котов', () => {
    test('Проверяем nameIsValid определяется', () => {
    expect(nameIsValid).toBeDefined();
  });
    test('Проверяем nameIsValid функция', () => {
    expect(typeof nameIsValid).toBe('function');
  });
    test('Передать валидную кличку', () => {
    expect(nameIsValid('Черныш')).toEqual(true);
  });
    test('Передать валидную кличку', () => {
    expect(nameIsValid('Ам')).toEqual(true);
  });
    test('Передать валидную кличку', () => {
    expect(nameIsValid('Клепа')).toEqual(true);
  });
    test('Передать невалидную кличку', () => {
    expect(nameIsValid('Ч')).toEqual(false);
  });
    test('Передать невалидную кличку non-single', () => {
    expect(nameIsValid('Чер%79*1ф')).toEqual(true);
  });
    test('Проверяем length', () => {
    expect(nameIsValid('Ам')).toEqual(true);
  });
    test('Проверяем невалидную length', () => {
    expect(nameIsValid('А')).toEqual(false)
  });
    test('Проверяем кличка не пустая1', () => {
    expect(nameIsValid(' ')).toEqual(false)
  });
    test('Проверяем кличка не пустая2', () => {
    expect(nameIsValid('    ')).toEqual(false)
  });  
    test('Проверяем fullTrim определяется', () => {
    expect(fullTrim).toBeDefined();
   }); 
    test('Проверяем fullTrim это функция', () => {
    expect(typeof fullTrim).toBe('function');
  }); 
    test('Проверяем кличка без пробелов', () => {
    expect(fullTrim(' Черныш ')).toEqual('Черныш');
  });
});
//параметризированный unit test
describe.each('Проверяем Клички котов', () => {
   test.each`
   Name | Expected
   ${'Черныш'} | ${true}
   ${'Ам'} | ${true}
   ${'Клепа'} | ${true} 
   ${'Ч'} | ${false} 
   ${'Чер%79*1ф'} | ${true}
   ${'Ам'} | ${true} 
   ${'А'} | ${false}
   ${' '} | ${false}
   ${'  '} | ${false}
   ${'Черныш'} | ${false} 
   ${'Черныш'} | ${true} 
   ${' Черныш '} | ${'Черныш'} 
   `('nickname $Name is $Expected', ({Name, Expected}) => {
    expect(nameIsValid(Name)).toBe(Expected);
   });
});