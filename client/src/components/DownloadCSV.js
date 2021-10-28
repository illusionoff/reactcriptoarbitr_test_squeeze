import React, { useState, useEffect, useRef } from 'react';
import { getDataFileMemo } from '../functions/functions';

function ListSelect(props) {
  return <option value={props.number}>{props.value}</option>
}

function listItemsFun(propsNameFilesSelect, listItems) {
  propsNameFilesSelect.forEach((value) => listItems.push(
    <ListSelect key={value.toString()} value={value} number={value} />
  ));
  return listItems
}

export const DownloadCSV = (props) => {
  let firstValueSelected = props.nameFilesSelect[0];
  console.log(' firstValueSelected DownloadCSV=', firstValueSelected);

  const [nameFile, setNameFile] = useState(firstValueSelected);
  const listItems = useRef([]);

  useEffect(() => {
  }, [nameFile])
  const firstNameFileHook = () => {
    setNameFile(firstValueSelected);
    listItemsFun(props.nameFilesSelect, listItems.current);
  }

  // Tell react to run useEffect once the component is loaded
  useEffect(firstNameFileHook, [firstValueSelected]);

  const handleSubmit = (event) => {
    getDataFileMemo(nameFile)
      .then((data) => {
        console.log(data);
        console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');
        props.updateData(data);
      });
    event.preventDefault();// обязательно должно быть  если не вставить, то перезагружается вся страница
  }

  const handleChange = (event) => {
    setNameFile(event.target.value);
  }

  return (
    <>
      <blockquote>
        DownloadCSV
      </blockquote>
      <div className="center">
        <form onSubmit={handleSubmit} >
          <label className="center">
            <select name="namesFiles" id="select_downloadcsv" className="width180" value={nameFile} onChange={handleChange}>
              {listItems.current}
            </select>
          </label>
          <input type="submit" value="Загрузить файл" className="btn grey darken-1 width180 " />
        </form>
      </div>
    </>
  )
}
