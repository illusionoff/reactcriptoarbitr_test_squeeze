import { Chart } from './components/Chart';
// import { useCallback } from 'react'
import { WriteMe } from './components/WriteMe';
// import logo from './logo.svg';
// import './App.css';
import { LoadCSV } from './components/LoadCSV';


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

const numbers = [1, 2, 3, 4, 5];

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );



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
        <section id="NumberList">
          <NumberList numbers={numbers} />
        </section>
        <section id="WriteMe" className="full-height">
          <WriteMe />
        </section >
        <section id="LoadCSV" className="full-height">
          <LoadCSV />
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
