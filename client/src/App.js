import 'materialize-css';
import { Chart } from './components/Chart';
import { TechnicalTask } from './components/TechnicalTask';
import { Navbar } from './components/Navbar';
import { DevelopmentDescription } from './components/DevelopmentDescription';

function App() {
  return (
    <>
      <main>
        <section id="Navbar">
          <Navbar />
        </section >
        <section id="TechnicalTask">
          <TechnicalTask />
        </section >
        <section id="DevelopmentDescription">
          <DevelopmentDescription />
        </section >
        <section id="chart">
          <Chart />
        </section >
      </main>
    </>
  );
}

export default App;
