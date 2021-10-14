import { Chart } from './components/Chart';
// import { useCallback } from 'react'
// import { WriteMe } from './components/WriteMe';
// import logo from './logo.svg';
// import './App.css';
// import { LoadCSV } from './components/LoadCSV';

function App(props) {
  return (
    <>
      <main>
        {/* <section id="WriteMe" className="full-height">
          <WriteMe />
        </section > */}
        {/* <section id="LoadCSV" className="full-height">
          <LoadCSV />
        </section > */}
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
