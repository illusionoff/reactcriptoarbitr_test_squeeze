// import React from 'react';
import React, { useState, useEffect } from 'react';

// import { Line } from 'react-chartjs-2';
import ViewChart from './ViewChart';
// import { DownloadCSV } from './DownloadCSV';
import { postData, once } from '../functions/functions';//../hooks/message.hook
import { DownloadCSV } from './DownloadCSV';


let nameFilesSelect = [];
async function testGetdircsv() {
  console.log('startt function getdircsv()');
  try {
    let getdircsv = await postData('/api/message/getdircsv', {})
      .then(response => {
        // console.log('getdircsv запрос списка файлов в каталоге /api/message/getdircsv ');
        // console.log('getdircsv response=', response);
        // const nameFile = response.namesFiles[response.namesFiles.length - 1];
        // console.log('getdircsv nameFile=', nameFile);
        nameFilesSelect = response.namesFiles.reverse();
        const nameFile = response.namesFiles[0];
        return nameFile
      })
    let loadfile = await postData('/api/message/loadfile', { name: getdircsv }) //{ name: state.value }
    // console.log('getdircsv data getdircsv=', getdircsv);
    // console.log('getdircsv data loadfile=', loadfile);
    // console.log('getdircsv 2запрос загрузки данных выбранного файла /api/message/loadfile ');
    return loadfile
    // updateDataFunc(data);// изменяем стейт в Chart.js
  } catch (e) { console.log('ERROR function getdircsv', e) }
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




export const Chart = () => {

  const [dataCsv, setDataCsv] = useState({ data: 'Данных еще нет' });

  const hook = () => {
    testGetdircsv().then((loadfile) => {
      console.log('END getdircsv loadfile=', loadfile);
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
  function changeHandler() {
    console.log('this changeHandler');
  }
  function writeMeHandler() {
    console.log('this writeMeHandler button');
    // setDataCsv(dataCsv);
  }

  const updateData = (value) => {
    setDataCsv(value)
  }
  let name1 = 'name1';
  return (
    <>
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
      </div>
      <DownloadCSV nameFilesSelect={nameFilesSelect} updateData={updateData} />
      <div id="test4" className="col s12">Test 4</div>
      <ViewChart ViewChart={dataCsv} name={name1} />
    </>
  )
}
