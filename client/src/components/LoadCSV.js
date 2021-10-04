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

  const SampleComponent = () => {
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
      getNamesCSV();
    }, [])
    return (<div> foo </div>)
  }
  SampleComponent();

  return (
    <>
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

    </>
  )
}
