import fs from "fs";
import parse from 'csv-parse';

// function parseCSV() {
//   fs.readFile("../data/test_profit_12.csv", "utf8",
//     function (error, input) {
//       console.log("Асинхронное чтение файла");
//       if (error) throw error; // если возникла ошибка
//       // console.log('data file:', data);
//       parse(input, {
//         comment: '#',
//         // columns: ['col', 'bayGate', 'bayBith', 'sellGate', 'sellBith', 'diffSell', 'diffBay', 'timeServer', 'timeBith', 'init']
//       }, function (err, output) {
//         if (err) throw err; // если возникла ошибка
//         console.log('output=', output);
//         // assert.deepStrictEqual(
//         //   output,
//         //   [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]
//         // )
//       })

//     });
//   console.log('parseCSV');

// }
function once(fn, context) {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

const getDataCSV = async (InputData, updateDataFunc) => {
  try {
    postData('/api/message/loadfile', { name: InputData }) //{ name: state.value }
      .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
        console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');
        updateDataFunc(data);// изменяем стейт в Chart.js
      });
  } catch (e) { }
}

export { once, postData, getDataCSV };
