
import React, { useState, useEffect, useCallback } from 'react';
import { once, postData, getDataCSV } from '../functions/functions';//../hooks/message.hook

let countStartDownloadCSV = 0;

let getDataCsvClosureOnce = once(function (nameFile, updateData, fun) {
  console.log('Запущено!');
  fun(nameFile, updateData);
});

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
      console.log('name file:', nameFile);
      // setCharts({ value: charts.value++ });
      event.preventDefault();
    }
    console.log('DownloadCSV nameFile=', nameFile);
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <select name="user_profile_color_2" value={nameFile} onChange={handleChange}>
            {listItems}
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    )
  }

  const ViewListSelect = () => {
    const [files, setfiles] = useState([]);

    const hook = () => {
      postData('/api/message/getdircsv', {})
        .then((response) => {
          console.log('запрос списка файлов в каталоге /api/message/getdircsv ');
          setfiles(response)
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
