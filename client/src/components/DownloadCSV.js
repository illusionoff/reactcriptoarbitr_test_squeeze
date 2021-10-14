import React, { useState, useEffect } from 'react';

function ListSelect(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <option value={props.number}>{props.value}</option>
}

const listItems = values.map((value) => {
  // Правильно! Ключ нужно определять внутри массива:
  count++;
  console.log('count=', count);
  return <ListSelect key={value.toString()} value={value} number={value} />
});


const values = ['select#1', 'select#2', 'select#3'];
export const DownloadCSV = () => {
  function writeMeHandler() {
    console.log('this writeMeHandler button DownloadCSV');
    // setDataCsv(dataCsv);
  }
  return (
    <>
      <blockquote>
        DownloadCSV
      </blockquote>
      <div className="card-action">
        <button
          // className="btn yellow darken-4"
          className="btn cyan darken-1"
          onClick={writeMeHandler}
        // disabled={loading}
        >
          Отправить DownloadCSV
        </button>
      </div>
      <label>
        <select name="namesFiles" value={nameFile} onChange={handleChange}>
          {listItems}
        </select>
      </label>
    </>
  )
}
