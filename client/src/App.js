import { Chart } from './components/Chart';
// import { useCallback } from 'react'
import { WriteMe } from './components/WriteMe';
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <>
      <main>
        {/* <div className="card-action">
          <button
            // className="btn yellow darken-4"
            className="btn cyan darken-1"
            onClick={writeMeHandler}
          // disabled={loading}
          >
            Отправить
                            </button>
        </div> */}
        <section id="WriteMe" className="full-height">
          <WriteMe />
        </section >
        <section id="chart">
          <Chart />
        </section >
      </main>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
