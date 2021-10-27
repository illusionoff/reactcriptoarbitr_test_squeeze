// import fs from "fs";
// import parse from 'csv-parse';
const memoize = require("memoizee");
// import memoizeOne from 'memoize-one';
// const memoizeOne = require("memoize-one");

const memo = function () {
  let cache = [];
  return function (n) {
    if (cache.includes(n)) { console.log("already in memory") }
    else { console.log("first"); cache.push(n); }
  }
}();
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

// const getDataCSV = async (InputData, updateDataFunc) => {
//   try {
//     postData('/api/message/loadfile', { name: InputData }) //{ name: state.value }
//       .then((data) => {
//         console.log(data); // JSON data parsed by `response.json()` call
//         console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');
//         updateDataFunc(data);// изменяем стейт в Chart.js
//       });
//   } catch (e) { }
// }
const getDataCSV = async (InputData, updateDataFunc) => {
  try {
    postData('/api/message/loadfile', { name: InputData }) //{ name: state.value }
      .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
        console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');
        updateDataFunc(data);// изменяем стейт в Chart.js
      });
  } catch (e) { console.log(e) }
}

let namesArray = [];
async function getDataFileMemo(nameFile) {
  namesArray.push(nameFile);
  console.log('namesArray=', namesArray);
  console.log('START function getDataFile()');
  try {
    // nameFilesSelect = getdircsv.namesFiles.reverse();
    // const nameFile = getdircsv.namesFiles[0];
    // let loadfile = await postData('/api/message/loadfile', { name: nameFile }) //{ name: state.value }

    // console.log('getdircsv data getdircsv=', getdircsv);
    // console.log('getdircsv data loadfile=', loadfile);
    // console.log('getdircsv 2запрос загрузки данных выбранного файла /api/message/loadfile ');
    console.log('END function getDataFile()');
    const result = await postData('/api/message/loadfile', { name: nameFile });
    console.log('result.bayBith from server=', result.bayBith);
    // result.bayBith = [...result.bayBith];
    let bayBithArr = [];
    // for (var i = 0; i < result.bayBith.length; i++) {
    //   bayBithArr[bayBithArr[i]] = bayBithArr[i];
    // }
    // result.bayBith = [...bayBithArr];
    // for (var field in result.bayBith) {
    //   if (result.bayBith.hasOwnProperty(field)) {
    //     var name = result.bayBith[field];
    //     result[name] = name;
    //   }
    // }
    result.bayBith.myProperty = 'myProperty';
    console.log('result.bayBith.hasOwnProperty=', result.bayBith.hasOwnProperty('pop'));
    console.log('result.bayBith.hasOwnProperty myProperty=', result.bayBith.hasOwnProperty('myProperty'));
    for (let i = 0; i < result.bayBith.length; i++) {
      bayBithArr[i] = result.bayBith[i];
    }
    console.log('bayBithArr=', bayBithArr);
    // delete result.bayBith.prototype._chartjs;
    // delete result.prototype._chartjs;
    // result.bayBith = [1, 2, 3];
    // console.log('bayBithArr=', bayBithArr);
    const r = Symbol('Roger');
    result.bayBith[r] = {
      name: 'Roger',
      age: 6
    }
    console.log('Object.getOwnPropertySymbols(result.bayBith) =', Object.getOwnPropertySymbols(result.bayBith))
    Object.defineProperty(result.bayBith, "myProperty", {
      enumerable: false,
      writeable: true,
      configurable: false
    });
    // Object.defineProperty(result.bayBith, "_chartjs", {
    //   // writable: true
    //   // configurable: false
    //   value: {}
    // });
    const my = Object.getOwnPropertyDescriptor(result.bayBith, 'myProperty');
    const d = Object.getOwnPropertyDescriptor(result.bayBith, '_chartjs');
    console.log('My Object.getOwnPropertyDescriptor(result.bayBith, myProperty', my);
    console.log('Object.getOwnPropertyDescriptor(result.bayBith, _chartjs', d);
    console.log('result download data from server=', result);
    return result
    // updateDataFunc(data);// изменяем стейт в Chart.js
  } catch (e) { console.log('ERROR function getDataFile', e) }
}
let showMemoizeArrNames = [];
let showMemoizeArrData = [];
// const generateDouble = (f) => (arg) => f(f(arg));
let showMemoize = (f) => (arg) => {
  showMemoizeArrNames.push(arg);
  return f(f(arg));
}
// let getDataFileMemo1 = showMemoize(getDataFileMemo)
// let getDataFile = memoize(getDataFileMemo1);
let getDataFile = memoize(getDataFileMemo);
// let getDataFile = memo(getDataFileMemo);
// const getDataFile = memoizeOne(getDataFileMemo);
// const getDataFile = fastMemoize(getDataFileMemo);
console.log('showMemoizeArrNames=', showMemoizeArrNames);

export { once, postData, getDataCSV, getDataFile };
