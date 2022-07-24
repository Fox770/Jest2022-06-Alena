/** 
 * #1 - Функция возвращает сумму всех баллов - sumScores
 * @sumScores 
 * @param {object} scores - объект 
 * @param {string} property - имя
 * @param {number} value - балл 
 * @returns {number} Сумма баллов объекта
 */

const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5
    };

export const sumScores = (scores) => {  
    let sum = 0;
    for (let score of Object.values(scores)) {
        sum += score;
    }
     return sum;
  };

console.log(sumScores(scores));

/** 
 * #2 - Функция возвращает сумму всех баллов - sumScores2
 * @sumScores2 
 * @param {object} scores2 - объект 
 * @param {string} property - имя
 * @param {number} value - балл 
 * @returns {number} Сумма баллов объекта
 */

const scores2 = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
   };

export const sumScores2 = (scores2) => {  
        return Object.values(scores2).reduce((sum, current) => sum + current, 0);
  };

console.log(sumScores2(scores2));

