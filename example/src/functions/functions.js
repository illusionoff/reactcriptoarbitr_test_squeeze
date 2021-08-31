import fs from "fs";
import parse from 'csv-parse';

function parseCSV() {
  fs.readFile("../data/test_profit_12.csv", "utf8",
    function (error, input) {
      console.log("Асинхронное чтение файла");
      if (error) throw error; // если возникла ошибка
      // console.log('data file:', data);
      parse(input, {
        comment: '#',
        // columns: ['col', 'bayGate', 'bayBith', 'sellGate', 'sellBith', 'diffSell', 'diffBay', 'timeServer', 'timeBith', 'init']
      }, function (err, output) {
        if (err) throw err; // если возникла ошибка
        console.log('output=', output);
        // assert.deepStrictEqual(
        //   output,
        //   [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]
        // )
      })

    });
  console.log('parseCSV');

}

module.exports = { parseCSV }
