
const processFile = async () => {
  let count = 0;
  dataObj = { number: [], bayGate: [], bayBith: [], sellGate: [], sellBith: [], diffSell: [], diffBay: [], timeServer: [], timeGate: [], timeBith: [], percentBonus: [], bayOrSellGate: [], bayOrSellBith: [], init: [] };
  records = [];
  const parser = fs
    // .createReadStream(`${__dirname}/fs_read.csv`)
    .createReadStream(CSVFilePath)
    .pipe(parse({
      // CSV options if any
      // comment: '#',
      // columns: ['col', 'bayGate', 'bayBith', 'sellGate', 'sellBith', 'diffSell', 'diffBay', 'timeServer', 'timeBith', 'init']
      // columns: true
    }));
  for await (const record of parser) {
    // Work with each record
    records.push(record);
    if (count === 0) dataObj.names = record//console.log('Names=', record)
    else {
      // dataObj.number[count - 1] = record[0]; // можно и так
      // dataObj.number.push(record[0]);
      let countObj = 0;
      Object.keys(dataObj).forEach(key => {
        // elem[key]
        if (key != 'names') dataObj[key].push(record[countObj]);
        countObj++;
      })
    };

    count++;
  }
  // const length = Object.keys(dataObj).length;
  // console.log('length=', length); // 15
  return dataObj//records
}

// processFile()
//   // .then((result2) => { console.log('result2=', result2) })
//   .then((dataObj) => { console.log('dataObj=', dataObj) })
//   .catch(console.error)

module.exports = processFile;
