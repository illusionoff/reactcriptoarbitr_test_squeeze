
import React, { useState, useEffect, useCallback } from 'react';
let countStartDownloadCSV = 0;
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

const getDataCSV = async (InputData, updateDataFunc) => {
  try {
    // postData('/api/message/loadfile', { name: 'test download file' })
    postData('/api/message/loadfile', { name: InputData }) //{ name: state.value }
      .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
        console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');

        updateDataFunc(data);// изменяем стейт в Chart.js
      });
  } catch (e) { }
}

function once(fn, context) {
  var result;

  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}
// var canOnlyFireOnce = once(function (sendDataTest) {
//   console.log('Запущено!');
//   console.log('sendDataTest=', sendDataTest);
// });

var canOnlyFireOnce2 = once(function (nameFile, updateData) {
  console.log('Запущено!');
  getDataCSV(nameFile, updateData);
});

// let
export const DownloadCSV = ({ updateData }) => {
  countStartDownloadCSV++;
  console.log('countStartDownloadCSV=', countStartDownloadCSV);
  // function closureFunction() {
  //   let first = false;
  //   // let count = 0;

  //   function main(getDataCSV) {
  //     if (first === false) {
  //       console.log('first=', first);
  //       first = true;
  //       getDataCSV();
  //       return true
  //     }
  //     if (first === true) {
  //       console.log('first=', first);
  //       return false
  //     };
  //     // count++;
  //     // console.log('DownloadCSV count=', count)
  //   }
  //   return (getDataCSV) => main(getDataCSV)
  // }
  // let resultClosureFunction = closureFunction();

  // const updateData = props.updateData;
  // const [charts, setCharts] = useState({ value: 0 }); //назначаем нулевой элемент массива выбранным по default
  ////////////////////////////////////////////////////////
  //// START LoadCSV
  // export const LoadCSV = () => {
  // const messageRequest = useMessage();
  // const { loading, error, request, clearError } = useHttp(); //error
  // const [form, setForm] = useState({
  //   name: "", message: ""
  // });

  // useEffect(() => {
  //   messageRequest(error);
  //   clearError();
  // }, [error, messageRequest, clearError])

  // const changeHandler = event => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // }


  // const getCSV = async () => {
  //   try {
  //     // const data = await request('/api/message/getcsv', 'POST');
  //     // postData('http://localhost:3006/api/message/getcsv', {})
  //     postData('/api/message/getcsv', {})
  //       .then((data) => {
  //         console.log(data); // JSON data parsed by `response.json()` call
  //       });
  //     // messageRequest(data.message);
  //     // console.log('getCSV');
  //     // console.log('Data:', data);
  //   } catch (e) { }
  // }

  // const getNamesCSV = async () => {
  //   try {
  //     // const data = await request('/api/message/getdircsv', 'POST');
  //     // postData('http://localhost:3006/api/message/getdircsv', {})
  //     postData('/api/message/getdircsv', {})
  //       .then((data) => {
  //         console.log(data); // JSON data parsed by `response.json()` call
  //       });
  //     // messageRequest(data.message);
  //     // console.log('getdircsv')
  //     // console.log('Data:', data);
  //   } catch (e) { }
  // }




  // const getRandomColor = () => {
  //   return "#" + Math.random().toString(16).slice(2, 8);
  // }



  function ListSelect(props) {
    // Правильно! Не нужно определять здесь ключ:
    return <option value={props.number}>{props.value}</option>
  }

  function NumberListSelect(props) {
    const values = props.values;
    const [nameFile, setNameFile] = useState(values[0]); //назначаем нулевой элемент массива выбранным по default
    let count = -1;
    // const getNamesCSV = async (InputData) => {
    //   try {
    //     // postData('/api/message/loadfile', { name: 'test download file' })
    //     postData('/api/message/loadfile', { name: InputData }) //{ name: nameFile.value }
    //       .then((data) => {
    //         console.log(data); // JSON data parsed by `response.json()` call
    //         console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');

    //         updateData(data);// изменяем стейт в Chart.js
    //       });
    //   } catch (e) { }
    // }
    // resultClosureFunction(getNamesCSV(nameFile.value));
    // const memoizedCallback = useCallback(
    //   () => {
    //     getNamesCSV(nameFile.value);
    //   },
    //   [nameFile.value],
    // );
    // memoizedCallback();
    // getNamesCSV(nameFile.value); // Вызвало бесконечный цикл вызываем первую загрузку данных CSV файла для первой отрисовки графика

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
      // alert('Ваш любимый вкус: ' + nameFile.value);
      console.log('name file:', nameFile);
      // setCharts({ value: charts.value++ });
      event.preventDefault();
    }
    console.log('DownloadCSV nameFile=', nameFile);
    // useEffect((nameFile, updateData) => { getDataCSV(nameFile, updateData) }, []);

    // (nameFile.value, updateData);
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
          // setfiles(response);
          setfiles(response)
          // console.log(this.state.name);
          console.log('response=', response);
          // Загружаем данные из CSV файла последнего идиножды
          canOnlyFireOnce2(response.namesfiles[response.namesfiles.length - 1], updateData); // "Запущено!"

          // getDataCSV('test1_profit_602_1631860131348.csv', updateData); // бесконечный цикл все равно
          // canOnlyFireOnce2(files.namesfiles, updateData); // "Запущено!"
          // canOnlyFireOnce2(files[0], updateData); // Не запущено
          // canOnlyFireOnce2(files[0], updateData); // Не запущено
        });
    }
    // Tell react to run useEffect once the component is loaded
    useEffect(hook, []); // если указать files во втором парамметре массиве то бесконечный цикл
    // useEffect(() => canOnlyFireOnce2('test1_profit_602_1631860131348.csv', updateData), [files]); // если указать files во втором парамметре массиве то бесконечный цикл

    // const hook2 = () => {

    //   getDataCSV('test1_profit_702_1632124312797.csv', updateData); // бесконечный цикл все равно

    // }

    // useEffect(hook2, []); // если указать files во втором парамметре массиве то бесконечный цикл
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
    <>
      {/* <h3 className="page-title white-text">DownloadCSV</h3>
      <div className="card-action">
        <button
          // className="btn yellow darken-4"
          className="btn cyan darken-1"
          onClick={}
        // disabled={loading}
        >
          </button>
      </div>

      <div className="card-action">
        <button
          // className="btn yellow darken-4"
          className="btn cyan darken-1"
          onClick={getCSV}
        // disabled={loading}
        >getCSV
          </button>
      </div> */}
      <ViewListSelect />
    </>
  )

}
