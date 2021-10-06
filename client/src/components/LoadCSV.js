import React, { useState, useEffect } from 'react';
// import { useHttp } from '../hooks/http.hook';
// import { useMessage } from '../hooks/message.hook';

//
// import ReactDOM from 'react-dom';

export const LoadCSV = () => {
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


  const getCSV = async () => {
    try {
      // const data = await request('/api/message/getcsv', 'POST');
      // postData('http://localhost:3006/api/message/getcsv', {})
      postData('/api/message/getcsv', {})
        .then((data) => {
          console.log(data); // JSON data parsed by `response.json()` call
        });
      // messageRequest(data.message);
      // console.log('getCSV');
      // console.log('Data:', data);
    } catch (e) { }
  }

  const getNamesCSV = async () => {
    try {
      // const data = await request('/api/message/getdircsv', 'POST');
      // postData('http://localhost:3006/api/message/getdircsv', {})
      postData('/api/message/getdircsv', {})
        .then((data) => {
          console.log(data); // JSON data parsed by `response.json()` call
        });
      // messageRequest(data.message);
      // console.log('getdircsv')
      // console.log('Data:', data);
    } catch (e) { }
  }

  // getNamesCSV();
  // const componentDidMountM = () => {
  //   componentDidMount() {
  //     fetch('http://localhost:3000/data/newsData.json')
  //       .then(response => {
  //         return response.json()
  //       })
  //       .then(data => {
  //         console.log(this)
  //         console.log('приехали данные ', data)
  //       })
  //   }
  // }
  function ListItem(props) {
    // Правильно! Не нужно определять здесь ключ:
    return <li>{props.value}</li>
  }

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Правильно! Ключ нужно определять внутри массива:
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    )
  }


  // <select name="user_profile_color_1">
  //   <option value="1">Синий</option>
  //   <option value="2">Зеленый</option>
  //   <option value="3">Желтый</option>
  //   <option value="4">Красный</option>
  //   <option value="5">Оранжевый</option>
  //   <option value="6">Черный</option>
  // </select>

  function ListSelect(props) {
    // Правильно! Не нужно определять здесь ключ:
    // return <li>{props.value}</li>;
    return <option value={props.number}>{props.value}</option>
  }

  function NumberListSelect(props) {
    const [state, setState] = useState({ value: '0' });
    const values = props.values;
    // console.log('values=', values);
    let count = -1;
    const listItems = values.map((value) => {
      // Правильно! Ключ нужно определять внутри массива:
      count++;
      console.log('count=', count);
      // return <ListSelect key={value.toString()} value={value} number={count} />
      return <ListSelect key={value.toString()} value={value} number={value} />
    });
    // let state = {value: '0'};
    const handleChange = (event) => {
      console.log('handleChange = yes');
      console.log('Change value: event.target.value=', event.target.value);

      setState({ value: event.target.value });
    }

    return (
      // <select name="user_profile_color_2">
      // value={this.state.value} onChange={this.handleChange}
      <select name="user_profile_color_2" value={state.value} onChange={handleChange}>
        {listItems}
      </select>
    )
  }
  // const numbers = [1, 2, 3, 4, 5, 6];


  const getRandomColor = () => {
    return "#" + Math.random().toString(16).slice(2, 8);
  }

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



  const MyComponent = () => {

    // initialise countries: []
    const [countries, setCountries] = useState([]);

    const hook = () => {
      postData('/api/message/getdircsv', {})
        .then((response) => {
          setCountries(response);
        });
    }

    // Tell react to run useEffect once the component is loaded
    useEffect(hook, []);
    console.log('countries=', countries);

    // Display data
    console.log('typeof countries.namesfiles=', typeof countries.namesfiles);
    console.log('countries.namesfiles=', countries.namesfiles);
    console.log('Array.isArray(countries.namesfiles)=', Array.isArray(countries.namesfiles));
    if (Array.isArray(countries.namesfiles)) {
      console.log('countries.namesfiles.length-----=', countries.namesfiles.length);
    }

    if (Array.isArray(countries.namesfiles)) {
      // const listSelectData = ['1 listSelectData', '2 listSelectData', '3 listSelectData'];
      // console.log('listSelectData=', listSelectData);
      return (
        // <div>Countries: {countries.namesfiles[2]}</div>
        <div><NumberList numbers={countries.namesfiles} />
          <NumberListSelect values={countries.namesfiles} />
          {/* <NumberListSelect values={listSelectData} /> */}
          <select name="user_profile_color_1">
            <option value="1">Синий</option>
            <option value="2">Зеленый</option>
            <option value="3">Желтый</option>
            <option value="4">Красный</option>
            <option value="5">Оранжевый</option>
            <option value="6">Черный</option>
          </select>
        </div>
      )
    } else {
      return (
        <div>Countries: {countries}</div>
      )
    }
    // return (
    //   // <p>Countries: {countries.length}</p>
    //   <div>Countries: {countries.namesfiles}</div>
    //   // <div>Countries: {countries.namesfiles.lenght}</div>

    // )

  };


  return (
    <>
      {/* {mounted && <FirstLoadNamesCsv />} */}
      <div>
        <h3 className="page-title white-text">Load CSV files</h3>
        <div className="container">
          <div className="card  blue darken-1 black-text">
            <div className="card-content white-text">
            </div>

          </div>

        </div>
        <div className="card-action">
          <button
            // className="btn yellow darken-4"
            className="btn cyan darken-1"
            onClick={getCSV}
          // disabled={loading}
          >CSV
          </button>
        </div>

        <div className="card-action">
          <button
            // className="btn yellow darken-4"
            className="btn cyan darken-1"
            onClick={getNamesCSV}
          // disabled={loading}
          >getNamesCSV
          </button>
        </div>


      </div>
      {/* <section id="SampleComponent" className="full-height">
          <SampleComponent />
        </section > */}
      {/* <section id="FirstLoadNamesCsv" className="full-height">
        <FirstLoadNamesCsv />
      </section > */}
      <MyComponent />
    </>
  )
}
