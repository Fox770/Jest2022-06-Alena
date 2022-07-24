import { sumScores, sumScores2 } from '../src/homework6.Al';

describe('Функция #1 возвращает сумму всех баллов', () => {
    /**
    * Описываем несколько unit тестов для функции,
    * которая проверяет, что она существует и работает корректно.
    */
    const scores = {
        Anna: 10,
        Olga: 1,
        Ivan: 5
    };
    test('Проверяем функция #1 определяется', () => {
        expect(sumScores).toBeDefined();
    });
    test('Проверяем sumScores это функция', () => {
        expect(typeof sumScores).toBe('function');
    });
    /** Проверяем функция #1 работает корректно (positive tests)*/
    test('Проверяем, что функция суммирует все баллы', () => {
        expect(sumScores(scores)).toBe(16);
    });
    test('Проверяем, что функция #1 суммирует все баллы #2', () => {
        expect(sumScores(scores)).toEqual(16);
    });
    /** Проверяем функция #1 определяет невалидную сумму баллов (negative tests)*/
    test('Проверяем, что функция #1 определяет некорректную сумму', () => {
        expect(sumScores(scores)).not.toEqual(0);
    });
    test('Проверяем, что функция #1 определяет некорректную сумму', () => {
        expect(sumScores(scores)).not.toEqual(10);
    });
    test('Проверяем, что функция #1 определяет некорректную сумму #2', () => {
        expect(sumScores(scores)).not.toBe(1);
    });
    test('Проверяем, что функция #1 определяет некорректную сумму #3', () => {
        expect(sumScores(scores)).not.toEqual(5);
    });
    test('Проверяем, что функция #1 определяет некорректный тип значения #1', () => {
        expect(sumScores(scores)).not.toEqual(String);
    });
    test('Проверяем, что функция #1 определяет некорректный тип значения #2', () => {
        expect(sumScores(scores)).not.toEqual(null);
    });
    test('Проверяем, что функция #1 определяет некорректный тип значения #3', () => {
        expect(sumScores(scores)).not.toEqual(undefined);
    });
});

describe('Функция #2 возвращает сумму всех баллов', () => {
    /**
    * Описываем несколько unit тестов для функции,
    * которая проверяет, что она существует и работает корректно.
    */
    const scores2 = {
        Anna: 10,
        Olga: 1,
        Ivan: 5
    };
    test('Проверяем функция #2 определяется', () => {
        expect(sumScores2).toBeDefined();
    });
    test('Проверяем sumScores2 это функция', () => {
        expect(typeof sumScores2).toBe('function');
    });
    /** Проверяем функция #2 работает корректно (positive tests)*/
    test('Проверяем, что функция #2 суммирует все баллы', () => {
        expect(sumScores2(scores2)).toBe(16);
    });
    test('Проверяем, что функция #2 суммирует все баллы #2', () => {
        expect(sumScores2(scores2)).toEqual(16);
    });
    /** Проверяем функция #1 определяет невалидную сумму баллов (negative tests) */
    test('Проверяем, что функция #1 определяет некорректные значения', () => {
        expect(sumScores2(scores2)).not.toEqual(0);
    });
    test('Проверяем, что функция #1 определяет некорректные значения #3', () => {
        expect(sumScores2(scores2)).not.toBe(10);
    });
    test('Проверяем, что функция #1 определяет некорректные значения #3', () => {
        expect(sumScores2(scores2)).not.toEqual(1);
    });
    test('Проверяем, что функция #1 определяет некорректную сумму #2', () => {
        expect(sumScores2(scores2)).not.toBe(5);
    });
    test('Проверяем, что функция #1 определяет некорректный тип значения #1', () => {
        expect(sumScores2(scores2)).not.toEqual(String);
    });
    test('Проверяем, что функция #1 определяет некорректный тип значения #2', () => {
        expect(sumScores2(scores2)).not.toEqual(null);
    });
    test('Проверяем, что функция #1 определяет некорректный тип значения #3', () => {
        expect(sumScores2(scores2)).not.toEqual(undefined);
    });
});


describe('Функция сравнения юзеров в объекте', () => {
    /** Проверяем функция возвращает корректное число баллов для каждого юзера (positive tests)*/
    const scores3 = {
        Anna: 10,
        Olga: 1,
        Ivan: 5
    }
    test('Сравниваем юзеров', () => {
        expect(scores3).toEqual({
            Anna: 10,
            Olga: 1,
            Ivan: 5
        })
        expect(scores3.Anna).toEqual(10);
        expect(scores3.Olga).toEqual(1);
        expect(scores3.Ivan).toEqual(5);
        /** Проверяем функция корректно обрабатывают значения баллов для каждого юзера (negative tests)*/
        expect(scores3.Anna).not.toEqual(5);
        expect(scores3.Olga).not.toEqual(10);
        expect(scores3.Ivan).not.toEqual(1);
    })
});