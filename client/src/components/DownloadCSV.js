import React, { useState, useEffect } from 'react';
import { postData } from '../functions/functions';//../hooks/message.hook

function ListSelect(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <option value={props.number}>{props.value}</option>
}

function writeMeHandler() {
  console.log('this writeMeHandler button DownloadCSV');
  // setDataCsv(dataCsv);
}

const values = ['select#1', 'select#2', 'select#3'];
let countDownload = 0;
console.log('countDownloadUP');

let listItems = [];

function listItemsFun(propsNameFilesSelect) {
  // listItems = props.nameFilesSelect.map((value, index) => {
  //   // if (index === 0) {
  //   console.log('ListSelect');
  //   //   return <option key={value.toString()} defaultValue={value}>{value}</option>
  //   //   // return <ListSelect key={value.toString()} selected="selected" value={value} number={value} />
  //   // }
  //   // Правильно! Ключ нужно определять внутри массива:
  //   return <ListSelect key={value.toString()} value={value} number={value} />
  // });
  // return listItems
  listItems = propsNameFilesSelect.map((value, index) => {
    console.log('ListSelect');
    // Правильно! Ключ нужно определять внутри массива:
    return <ListSelect key={value.toString()} value={value} number={value} />
  });
  return listItems
}


export const DownloadCSV = (props) => {
  let firstValueSelected = props.nameFilesSelect[0];
  console.log(' firstValueSelected DownloadCSV=', firstValueSelected);
  countDownload++;
  console.log(' test count DownloadCSV=', countDownload);

  const [nameFile, setNameFile] = useState(firstValueSelected); //назначаем нулевой элемент массива выбранным по default

  const firstNameFileHook = () => {
    console.log('nameFile useEffect DownloadCSV=', firstValueSelected)
    setNameFile(firstValueSelected);
    listItemsFun(props.nameFilesSelect);
  }

  // Tell react to run useEffect once the component is loaded
  useEffect(firstNameFileHook, [firstValueSelected]); // если указать files во втором парамметре массиве то бесконечный цикл
  console.log('nameFile DownloadCSV 0 = ', nameFile);
  console.log(' props.nameFilesSelect DownloadCSV=', props.nameFilesSelect);

  const handleSubmit = (event) => {
    console.log('nameFile DownloadCSV = ', nameFile);
    postData('/api/message/loadfile', { name: nameFile }) //{ name: state.value }
      .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
        console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');
        // updateDataFunc(data);// изменяем стейт в Chart.js
        // нужен запрос данных из файла
        props.updateData(data);
      });
    event.preventDefault();// обязательно должно быть  если не вставить, то перезагружается вся страница
  }

  const handleChange = (event) => {
    console.log('handleChange = yes');
    // console.log('Change value: event.target.value=', event.target.value);
    console.log('Change value: event.target.value=', event.target.value);
    setNameFile(event.target.value);
  }
  return (
    <>
      <div className="container">
        <blockquote>
          DownloadCSV
      </blockquote>
        {/* <div className="card-action">
        <button
          // className="btn yellow darken-4"
          className="btn cyan darken-1"
          onClick={writeMeHandler}
        // disabled={loading}
        >
          Отправить DownloadCSV
        </button>
      </div> */}
        <div className="center">
          <form onSubmit={handleSubmit} >
            <label className="center">
              {/* <select name="namesFiles" onChange={handleChange}> */}
              {/* //defaultValue={nameFile} ничего не дало */}
              <select name="namesFiles" id="select_downloadcsv" className="width180 center" value={nameFile} onChange={handleChange}>
                {listItems}
              </select>
            </label>
            <input type="submit" value="Загрузить файл" className="btn cyan darken-1 width180" />
          </form>
        </div>
      </div>
    </>
  )
}
