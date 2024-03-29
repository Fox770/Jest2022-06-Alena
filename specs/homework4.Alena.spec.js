import { Kolobok, NewYear } from '../src/homework4.Al'; 
// Тесты 'Колобок'
describe('HW#4 Alena - Колобок', () => {
   test('Проверяем Колобок определяется', () => {
        expect(Kolobok).toBeDefined();
      });
    test('Проверяем Колобок это функция', () => {
        expect(typeof Kolobok).toBe('function');
      });
    test('Проверяем встречал ли Колобок дедушку', () => {
        expect(Kolobok('дедушка')).toBe('Я от дедушки ушел');
      });
    test('Проверяем встречал ли Колобок бабушку', () => {
        expect(Kolobok('бабушка')).toBe('Я от бабушки ушел');
      });
    test('Проверяем встречал ли Колобок зайца', () => {
        expect(Kolobok('заяц')).toBe('Я от зайца ушел');
      });
    test('Проверяем встречал ли Колобок волка', () => {
        expect(Kolobok('волк')).toBe('Я от волка ушел');
      });
    test('Проверяем встречал ли Колобок медведя', () => {
        expect(Kolobok('медведь')).toBe('От медведя ушел');
      });
    test('Проверяем встречал ли Колобок лису', () => {
        expect(Kolobok('лиса')).toBe('От тебя, лиса, и подавно уйду!');
      });
    test('Проверяем встречал ли Колобок кого-то', () => {
        expect(Kolobok()).toBe('Колобок, колобок! Я тебя съем');
      });
    test.skip('HW#4 Alena - Колобок', () => {
      });
});

// Тесты 'Новый год'
describe('HW#4 Alena - Новый год', () => {
    test('Проверяем Новый год определяется', () => {
        expect(NewYear).toBeDefined();
      });
    test('Проверяем Новый год это функция', () => {
        expect(typeof NewYear).toBe('function');
      });
    test('Проверяем Дед Мороз', () => {
        expect(NewYear('Дед Мороз')).toBe('Дед Мороз! Дед Мороз! Дед Мороз!');
      });
    test('Проверяем Снегурочка', () => {
        expect(NewYear('Снегурочка')).toBe('Снегурочка! Снегурочка! Снегурочка!');
      });
    test('Проверяем Новый год', () => {
        expect(NewYear()).toBe('C Новым годом!');
      });
    test.skip('HW#4 Alena - Новый год', () => {
    });
});
