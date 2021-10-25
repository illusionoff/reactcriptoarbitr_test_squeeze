// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';

// import { Line } from 'react-chartjs-2';
// import { DownloadCSV } from './DownloadCSV';
import { postData, once } from '../functions/functions';//../hooks/message.hook
import ViewChart from './ViewChart';
import { DownloadCSV } from './DownloadCSV';
import { ChartDescription } from './ChartDescription';


// let nameFilesSelect = [];
async function getNamesFiles() {
  console.log('START function getNamesFiles()');
  try {
    // let getdircsv = await postData('/api/message/getdircsv', {})
    // .then(response => {
    //   // console.log('getdircsv запрос списка файлов в каталоге /api/message/getdircsv ');
    //   // console.log('getdircsv response=', response);
    //   // const nameFile = response.namesFiles[response.namesFiles.length - 1];
    //   // console.log('getdircsv nameFile=', nameFile);
    //   nameFilesSelect = response.namesFiles.reverse();
    //   const nameFile = response.namesFiles[0];
    //   return nameFile
    // })
    console.log('END function getNamesFiles()');
    return await postData('/api/message/getdircsv', {})
    // updateDataFunc(data);// изменяем стейт в Chart.js
  } catch (e) { console.log('ERROR function getNamesFiles', e) }
}
async function getDataFile(nameFile) {
  console.log('START function getDataFile()');
  try {
    // nameFilesSelect = getdircsv.namesFiles.reverse();
    // const nameFile = getdircsv.namesFiles[0];
    // let loadfile = await postData('/api/message/loadfile', { name: nameFile }) //{ name: state.value }

    // console.log('getdircsv data getdircsv=', getdircsv);
    // console.log('getdircsv data loadfile=', loadfile);
    // console.log('getdircsv 2запрос загрузки данных выбранного файла /api/message/loadfile ');
    console.log('END function getdircsv()');
    return await postData('/api/message/loadfile', { name: nameFile })
    // updateDataFunc(data);// изменяем стейт в Chart.js
  } catch (e) { console.log('ERROR function getDataFile', e) }
}

// let testGetdircsvOnce = once(function () {
//   console.log('Запущено!');
//   testGetdircsv().then((loadfile) => {
//     console.log('END getdircsv loadfile=', loadfile);
//   });
// });

console.log('this index.js React');
// let getDataCsvClosureOnce = once(() => {
//   testGetdircsv().then((loadfile) => {
//     console.log('END getdircsv loadfile=', loadfile);
//   })
// }
// );

async function firstLoadDataFile(nameFilesSelect) {
  const funOne = await getNamesFiles();
  funOne.namesFiles.reverse().forEach((elem) => nameFilesSelect.current.push(elem));
  console.log('nameFilesSelect_=', nameFilesSelect);
  const nameFile = funOne.namesFiles[0];

  // const funTwo = await getDataFile(JSON.stringify(funOne.query_string));
  // const result = funOne+funTwo;
  // getdircsv2().then((result) => console.log('getdircsv2=', result));
  return await getDataFile(nameFile)
}


export const Chart = () => {

  // const [dataCsv, setDataCsv] = useState(() => testGetdircsv().then((loadfile) => setDataCsv(loadfile)));
  const [dataCsv, setDataCsv] = useState({ name: "нет данных" });
  const nameFilesSelect = useRef([]);

  // useEffect(() => {
  //   nameFilesSelect.current
  // },[])
  const hook = () => {
    // testGetdircsv().then((loadfile) => {
    //   console.log('END getdircsv loadfile=', loadfile);
    //   setDataCsv(loadfile);
    // })
    firstLoadDataFile(nameFilesSelect).then((loadfile) => {
      console.log('END twoAsyncFunction loadfile=', loadfile);
      setDataCsv(loadfile);
    })
  };


  // Tell react to run useEffect once the component is loaded
  useEffect(hook, []); // если указать files во втором парамметре массиве то бесконечный цикл
  // const [dataCsv, setDataCsv] = useState({ data: 'Данных еще нет' });

  // const updateData = (value) => {
  //   setDataCsv(value)
  // }
  // return (
  //   <>
  //     <div><h3 className="page-title white-text">Write to me</h3></div>
  //     <DownloadCSV updateData={updateData} />
  //     <ViewChart ViewChart={dataCsv} />

  //   </>
  // )
  // function changeHandler() {
  //   console.log('this changeHandler');
  // }
  // function writeMeHandler() {
  //   console.log('this writeMeHandler button');
  //   // setDataCsv(dataCsv);
  // }

  const updateData = (value) => {
    setDataCsv(value)
  }
  // let name1 = 'name1';
  return (
    <>
      {/* <h3 className="page-title white-text">Chart</h3>
      <input
        placeholder="Введите ваше имя"
        id="name"
        type="text"
        name="name"
        className="yellow-input validate"
        minLength="3"
        // // pattern=".{3,500}"
        maxLength="30"
        data-length="30"
        required
        value='text'//{form.name}
        onChange={changeHandler}
      // onChange={changeHandler}
      />
      <div className="card-action">
        <button
          // className="btn yellow darken-4"
          className="btn cyan darken-1"
          onClick={writeMeHandler}
        // disabled={loading}
        >
          Отправить
        </button>
      </div> */}
      <ChartDescription />
      <section id="DownloadCSV">
        <DownloadCSV nameFilesSelect={nameFilesSelect.current} updateData={updateData} />
      </section>
      <ViewChart ViewChart={dataCsv} />
    </>
  )
}
