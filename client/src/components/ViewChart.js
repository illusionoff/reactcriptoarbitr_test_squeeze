import React, { useRef } from 'react';

import { Line } from 'react-chartjs-2';
const FONT_AXIS = { size: 16, style: 'italic' };
const FONT_TITLE_CHART = { size: 24, style: 'italic' };

function ViewChart(props) {
  const firstChange = useRef(false);

  if (props.ViewChart.number) {
    firstChange.current = true;
    console.log('ViewChart.js реальный файл данных передан');
    console.log('ViewChart.js props.ViewChart.number= ', props.ViewChart.number)
  } else {
    console.log('ViewChart.js реальный файл данных НЕпередан');
  }

  if (firstChange.current) {
    console.log('ViewChart dataCsv=', props.ViewChart);
    Line.animation = false;

    let testDate = props.ViewChart;
    let numberY = testDate.number;
    let dataY = testDate.timeServer;

    function fusionNumberTime(timesArr) {
      let newDataY = timesArr.map((elem, index) => {
        let result = elem.toString();
        let numberToString = numberY[index].toString();
        result = numberToString + '-' + result.substring(result.length - 7);
        return result
      });
      return newDataY
    }

    let strtimeServer = fusionNumberTime(testDate.timeServer);// вместо newDataY
    let strtimeGate = fusionNumberTime(testDate.timeGate);
    let strtimeBith = fusionNumberTime(testDate.timeBith);

    let newDataY = dataY.map((elem, index) => {
      let result = elem.toString();
      let numberToString = numberY[index].toString();
      result = numberToString + '-' + result.substring(result.length - 7);
      return result
    });
    console.log(newDataY);
    console.log('newDataY.length=', newDataY.length);
    const data = canvas => {
      const ctx = canvas.getContext('2d');
      console.log('ctx=', ctx);
      const gradient = ctx.createLinearGradient(100, 0, 100, 2);
      return {
        backgroundColor: gradient, // что-то никакой разницы не видно
        datasets: [{
          label: 'bayOrSellGate',
          yAxisID: 'a',
          borderColor: 'red',
          data: testDate.bayOrSellGate
        }, {
          label: 'bayOrSellBith',
          yAxisID: 'b',
          borderColor: 'green',
          data: testDate.bayOrSellBith
        }]
      };
    }

    let colorArr = Array(29).fill('red').map((el, i, array) => {
      return array[i] = i % 2 === 0 ? '#566573' : 'green'
    });

    const options = {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Boolean and times diagram',
          font: FONT_TITLE_CHART
        }
      },
      // maintainAspectRatio: false,
      scales: {
        a: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'false/true/all',
            color: '#191', // green
            font: {
              family: 'Times',
              size: 20,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 48, left: 0, right: 0, bottom: 0 }
          },
          ticks: {
            color: 'red',
            stepSize: 2,
          }
        },
        b: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'price',
            color: 'White',
            font: {
              family: 'Times',
              size: 20,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 50, left: 0, right: 0, bottom: 0 }
          },
          ticks: {
            color: 'green',
            stepSize: 2,
          },
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
        x: {
          position: 'bottom',
          title: {
            display: true,
            text: 'timeBith',
            color: 'red',
            font: FONT_AXIS
          },
          grid: {
            // offset: true // offset true to get labels in between the lines instead of on the lines
          },
          labels: strtimeBith,//newDataY, // можно в опциях указывать не общий набор данный,  а отдельно для каждой оси х по отдельности
          ticks: { color: colorArr }, //colorArr через одного другой цвет'green'
        },
        x2: {
          position: 'top',
          title: {
            display: true,
            text: 'timeGate',
            color: 'green',
            font: FONT_AXIS
          },
          grid: {
            // offset: true // offset true to get labels in between the lines instead of on the lines
          },
          labels: strtimeGate,//newDataY2,  // можно в опциях указывать не общий набор данный,  а отдельно для каждой оси х по отдельности
          ticks: {
            color: colorArr //colorArr через одного другой цвет'green'
          },
        },
      }
    }

    const data2 = canvas => {
      const ctx = canvas.getContext('2d');
      console.log('ctx=', ctx);
      const gradient = ctx.createLinearGradient(100, 0, 100, 2);
      return {
        backgroundColor: gradient, // что-то никакой разницы не видно
        // labels: newDataY,
        datasets: [{
          label: 'percentBonus',
          yAxisID: 'a',
          backgroundColor: 'blue',
          borderColor: 'green',
          data: testDate.percentBonus//percentBonus
        }, {
          label: 'bayGate',
          yAxisID: 'b',
          borderColor: 'blue',
          data: testDate.bayGate
        }, {
          label: 'bayBith',
          yAxisID: 'c',
          borderColor: '#bbdefb', //light blue
          data: testDate.bayBith
        }, {
          label: 'sellGate',
          yAxisID: 'd',
          borderColor: 'red',
          data: testDate.sellGate
        },
        {
          label: 'sellBith',
          yAxisID: 'e',
          borderColor: '#f8bbd0', //light- pink светло-розовый
          data: testDate.sellBith
        }]
      };
    }

    const options2 = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Quotation price diagram',
          font: FONT_TITLE_CHART
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y;
              }
              return label;
            }
          }
        }
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales: {
        a: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'percentBonus',
            color: '#191', // green
            font: {
              family: 'Times',
              size: 20,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 30, left: 0, right: 0, bottom: 0 }
          },
          ticks: {
            color: 'green',
          },
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
        b: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'price',
            color: 'red',
            font: {
              family: 'Times',
              size: 20,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 30, left: 0, right: 0, bottom: 0 }
          },
          ticks: {
            color: 'blue', //#bbdefb голубой
          },
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
        c: {
          type: 'linear',
          display: false,
          position: 'right',
        },
        d: {
          type: 'linear',
          display: false,
          position: 'right',
        },
        e: {
          type: 'linear',
          display: false,
          position: 'right',
        },
        x: {
          position: 'bottom',
          title: {
            display: true,
            text: 'timeServer',
            color: 'blue',
            font: FONT_AXIS
          },
          grid: {
            // offset: true // offset true to get labels in between the lines instead of on the lines
          },
          labels: strtimeServer, // можно в опциях указывать не общий набор данный,  а отдельно для каждой оси х по отдельности
          ticks: { color: colorArr }, //colorArr через одного другой цвет'green'
        },
      }
    }

    return (

      <div>
        <div id="chartData2Up" >
          <div id="chartData2Down" >
            <Line data={data2} id="ChartQuotation"
              options={options2}
            />
          </div>
        </div>
        <hr width="85%" />
        <div id="chartData1Up" >
          <div id="chartData1Down" >
            <Line data={data}
              height={100}
              options={options}
            />
          </div>
        </div>
      </div >
    )
  }

  return (
    <>
      <div >
        <h3 className="page-title white-text">About</h3>
        <div className="container">
          <blockquote>
            Я начинающий Back-end, Full Stack Nodejs разработчик, которому интересно создавать новое, пробираться через ошибки и проблемы, постоянно обучаться.
            Чувствую себя наполненным восторгом и эйфорией, как ребенок, видя результат своих творений, осознавая полезность своих способностей. dsds
        </blockquote>
        </div >
      </div>
    </>)
}

export default ViewChart
