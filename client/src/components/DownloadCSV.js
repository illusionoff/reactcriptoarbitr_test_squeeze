import React, { useState, useEffect, useRef, useMemo } from 'react';
import { getDataFileMemo, getDataFile } from '../functions/functions';

function ListSelect(props) {
  return <option value={props.number}>{props.value}</option>
}

function listItemsFun(propsNameFilesSelect, listItems) {
  propsNameFilesSelect.forEach((value) => listItems.push(
    <ListSelect key={value.toString()} value={value} number={value} />
  ));
  return listItems
}

// function useMemoCompare(next, compare) {
//   // ref для хранения предыдущего значения
//   const prevRef = useRef();
//   const prev = prevRef.current;

//   // передаем предыдущее и новое значения в функцию
//   // для определения их идентичности
//   const isEqual = compare(prev, next);

//   // если значения не равны, обновляем prevRef
//   // обновление осуществляется только в случае неравенства значений
//   // поэтому, если функция вернула true, хук возвращает старое значение
//   useEffect(() => {
//     if (!isEqual) {
//       prevRef.current = next;
//     }
//   });

//   // если значения равны, возвращаем старое значение
//   return isEqual ? prev : next;
// }


export const DownloadCSV = (props) => {
  let firstValueSelected = props.nameFilesSelect[0];
  console.log(' firstValueSelected DownloadCSV=', firstValueSelected);

  const [nameFile, setNameFile] = useState(firstValueSelected);
  const listItems = useRef([]);
  const getFileNameMemo = useMemo(() => {
    console.log('getFileNameMemo!!!! DownloadCSV')
    return getDataFile(nameFile)
  }, [nameFile]);
  // const objFinal = useMemoCompare(obj, (prev, next) => {
  //   return prev && prev === next;
  // });
  // const returnObjReference = useMemo((newObj) => {
  //   const obj ={};
  //   obj.dataChart=newObj;
  //   return obj
  // }, [newObj]);

  // const getFileNameMemo = useMemo(() => {
  //   // objFinal
  //   const resultGetDataFile= getDataFile(nameFile);

  //   return returnObjReference(newObj)
  // }, [nameFile]);

  // useEffect(() => {
  //   // вызываем метод объекта и присваиваем результат состоянию
  //   return objFinal.someMethod().then((value) => setState(value));
  // }, [objFinal]);


  const firstNameFileHook = () => {
    setNameFile(firstValueSelected);
    listItemsFun(props.nameFilesSelect, listItems.current);
  }

  // Tell react to run useEffect once the component is loaded
  useEffect(firstNameFileHook, [firstValueSelected, props.nameFilesSelect]);

  const handleSubmit = (event) => {
    // getDataFileMemo(nameFile)
    //   .then((data) => {
    //     console.log(data);
    //     console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');
    //     props.updateData(data);
    //   });

    // getFileNameMemo(nameFile);
    // props.updateData(getFileNameMemo);


    event.preventDefault();// обязательно должно быть  если не вставить, то перезагружается вся страница
  }

  const handleChange = (event) => {
    setNameFile(event.target.value);
  }

  return (
    <>
      <div className="container">
        <h5 className="center"><p> Загрузка файла графиков</p></h5>
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
      </div>
    </>
  )
}
