import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

//
// import ReactDOM from 'react-dom';

export const LoadCSV = () => {
  // const messageRequest = useMessage();
  const { loading, error, request, clearError } = useHttp(); //error
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
      const data = await request('/api/message/getcsv', 'POST');
      // messageRequest(data.message);
      console.log('getCSV');
      console.log('Data:', data);
    } catch (e) { }
  }

  const getNamesCSV = async () => {
    try {
      const data = await request('/api/message/getdircsv', 'POST');
      // messageRequest(data.message);
      console.log('getdircsv')
      console.log('Data:', data);
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
  const [mounted, setMounted] = useState(true);
  const toggle = () => setMounted(!mounted);
  function ListItem(props) {
    // Правильно! Не нужно определять здесь ключ:
    return <li>{props.value}</li>;
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
    );
  }

  const numbers = [1, 2, 3, 4, 5, 6];


  const getRandomColor = () => {
    return "#" + Math.random().toString(16).slice(2, 8);
  }

  const FirstLoadNamesCsv = () => {
    useEffect(() => {
      // код для запуска при монтировании компонента
      // fetch('http://localhost:3000/data/newsData.json')
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(data => {
      //     console.log(this)
      //     console.log('приехали данные ', data)
      //   })
      document.body.style.backgroundColor = getRandomColor();

      // let componentList = [
      //   <SampleComponent name="SomeName1" />,
      //   <SampleComponent name="SomeName2" />
      // ];
      getNamesCSV();

    }, [])
    // return (<div> foo </div>)
    return (
      <>
        <ul>
          <li>10</li>
          <li>11</li>
        </ul>
      </>)
    // return (
    //   <section id="NumberList">
    //     <NumberList numbers={numbers} />
    //   </section>)
  }
  FirstLoadNamesCsv();

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
            disabled={loading}
          >CSV
          </button>
        </div>

        <div className="card-action">
          <button
            // className="btn yellow darken-4"
            className="btn cyan darken-1"
            onClick={getNamesCSV}
            disabled={loading}
          >getNamesCSV
          </button>
        </div>


      </div>
      {/* <section id="SampleComponent" className="full-height">
          <SampleComponent />
        </section > */}
    </>
  )
}
