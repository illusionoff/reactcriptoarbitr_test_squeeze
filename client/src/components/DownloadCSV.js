
import React, { useState, useEffect } from 'react';
import { once, postData, getDataCSV } from '../functions/functions';//../hooks/message.hook

let countStartDownloadCSV = 0;

let getDataCsvClosureOnce = once(function (nameFile, updateData, fun) {
  console.log('Запущено!');
  fun(nameFile, updateData);
});

async function getdircsv() {
  console.log('startt function getdircsv()');
  try {
    postData('/api/message/getdircsv', {})
      .then(response => {
        console.log('запрос списка файлов в каталоге /api/message/getdircsv ');
        console.log('response=', response);
        return response
      })
      .then(nameFiles => {
        console.log('nameFiles=', nameFiles); // JSON data parsed by `response.json()` call
        console.log('1 запрос загрузки данных выбранного файла /api/message/loadfile ');
        const nameFile = nameFiles.namesfiles[nameFiles.namesfiles.length - 1];
        postData('/api/message/loadfile', { name: nameFile }) //{ name: state.value }
          .then((data) => {
            console.log('data getdircsv=', data); // JSON data parsed by `response.json()` call
            console.log('2запрос загрузки данных выбранного файла /api/message/loadfile ');
            // updateDataFunc(data);// изменяем стейт в Chart.js
            return data
          });
        // updateDataFunc(data);// изменяем стейт в Chart.js
      })
      .then((data) => { console.log('return data getdircsv()!!!!!!!!!!=', data) });
  } catch (e) { }
}
getdircsv().then((data) => { console.log('getdircsv data=', data) });
// console.log('getdircsv=', getdircsv());
export const DownloadCSV = ({ updateData }) => {
  countStartDownloadCSV++;
  console.log('countStartDownloadCSV=', countStartDownloadCSV);
  function ListSelect(props) {
    // Правильно! Не нужно определять здесь ключ:
    return <option value={props.number}>{props.value}</option>
  }

  function NumberListSelect(props) {
    const values = props.values;
    const [nameFile, setNameFile] = useState(values[0]); //назначаем нулевой элемент массива выбранным по default
    let count = -1;

    const listItems = values.map((value) => {
      // Правильно! Ключ нужно определять внутри массива:
      count++;
      console.log('count=', count);
      return <ListSelect key={value.toString()} value={value} number={value} />
    });
    const handleChange = (event) => {
      console.log('handleChange = yes');
      console.log('Change value: event.target.value=', event.target.value);
      setNameFile(event.target.value);
    }

    const handleSubmit = (event) => {
      getDataCSV(nameFile, updateData);
      console.log('Данные файла загрузились');
      console.log('name file:', nameFile);
      // setCharts({ value: charts.value++ });
      event.preventDefault();// обязательно должно быть  если не вставить, то перезагружается вся страница
    }
    console.log('DownloadCSV nameFile=', nameFile);
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <select name="namesFiles" value={nameFile} onChange={handleChange}>
            {listItems}
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    )
  }

  const ViewListSelect = () => {
    const [files, setFiles] = useState([]);

    const hook = () => {
      postData('/api/message/getdircsv', {})
        .then((response) => {
          console.log('запрос списка файлов в каталоге /api/message/getdircsv ');
          setFiles(response)
          console.log('response=', response);
          // Загружаем данные из CSV файла последнего идиножды
          getDataCsvClosureOnce(response.namesfiles[response.namesfiles.length - 1], updateData, getDataCSV);
        });
    }
    // Tell react to run useEffect once the component is loaded
    useEffect(hook, []); // если указать files во втором парамметре массиве то бесконечный цикл
    // useEffect(() => getDataCsvClosureOnce('test1_profit_602_1631860131348.csv', updateData), [files]);
    console.log('files=', files);
    console.log('files.namesfiles=', files.namesfiles);
    if (Array.isArray(files.namesfiles)) {
      console.log('files.namesfiles.length-----=', files.namesfiles.length);
      return (
        <div>
          <NumberListSelect values={files.namesfiles} />
        </div>
      )
    }
    else {
      return (
        <div>loading download files ...</div>
      )
    }
  };

  return (
    <ViewListSelect />
  )
}
