/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

let i = 1;
// const timer = setInterval(() => console.log(`Сообщение номер ${i++}`), 2000);
// while (true) {
//   if (i === 5) {
//     clearInterval(timer);
//     console.log("Конец");
//     return;
//   }
// }

const timer = setInterval(() => {
  console.log(`Сообщение номер ${i++}`);
}, 2000);

setTimeout(()=>clearInterval(timer), 10200)