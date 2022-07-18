
/// функция const Колобок 
export const Kolobok = (nickname) => {
    switch (nickname) {
      case 'дедушка':
          return 'Я от дедушки ушел';
          break;
      case 'бабушка':
          return 'Я от бабушки ушел';
          break;
      case 'заяц':
          return 'Я от зайца ушел';
          break; 
      case 'волк':
          return 'Я от волка ушел';
          break;  
      case 'медведь':
          return 'От медведя ушел';
          break;    
      case 'лиса':
          return 'От тебя, лиса, и подавно уйду!';
          break;   
      default:
          return 'Колобок, колобок! Я тебя съем';         
     };   
};

/** 
 * Я от дедушки ушёл,
 * Я от бабушки ушёл,
 * Я от зайца ушёл,
 * Я от волка ушёл,
 * От медведя ушёл,
 * От тебя, лиса, и подавно уйду!
 */

/// функция Новый год
export const NewYear = (nickname) => {
    switch (nickname) {
      case `Дед Мороз`:
          return `${nickname}! ${nickname}! ${nickname}!`;
          break;
      case `Снегурочка`:
          return `${nickname}! ${nickname}! ${nickname}!`;
          break;
      default:
          return `C Новым годом!`;         
     };   
};