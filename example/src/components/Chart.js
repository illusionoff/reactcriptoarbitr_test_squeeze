import React from 'react';
import { Line } from 'react-chartjs-2';

Line.animation = false;

// const dataY = ['104-1628959734593', '105-1628959734701', '106-1628959734802', '107-1628959734941', '108-1628959735001', '109-1628959735102', '110-1628959735209', '111-1628959735397', '112-1628959735499', '113-1628959735599', '114-1628959735704', '116-1628959735899', '117-1628959736010', '118-1628959736100'];
const bayGate = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];
const bayBith = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];;
const sellGate = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];;
const sellBith = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];;
const diffSell = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];;
const diffBay = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];;
const bayOrSellGate = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0];
const bayOrSellBith = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0];
const init = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0];
const timeGate = [1628959734593, 1628959734701, 1628959734802, 1628959734941, 1628959735001, 1628959735102, 1628959735209, 1628959735397, 1628959735499, 1628959735599, 1628959735704, 1628959735899, 1628959736010, 1628959736100];
const timeBith = [1628959734593, 1628959734701, 1628959734802, 1628959734941, 1628959735001, 1628959735102, 1628959735209, 1628959735397, 1628959735499, 1628959735599, 1628959735704, 1628959735899, 1628959736010, 1628959736100];

const dataY = [1628959734593, 1628959734701, 1628959734802, 1628959734941, 1628959735001, 1628959735102, 1628959735209, 1628959735397, 1628959735499, 1628959735599, 1628959735704, 1628959735899, 1628959736010, 1628959736100];

const numberY = [104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117];
console.log('numberY[2].toString()=', typeof numberY[2].toString());
console.log('String', 'str');
let newDataY = dataY.map((elem, index) => {
  let result = elem.toString();
  let numberToString = numberY[index].toString();
  result = numberToString + '-' + result.substring(result.length - 7);
  return result
});
console.log(newDataY);



// Chart.defaults.global.legend.display = false; // eslint-disable-next-line no-unused-vars
// const chart = new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     labels: arrName,
//     datasets: [
//       {
//         backgroundColor: arrColor,
//         data: arrCosts,
//       },
//     ],
//   },
//   options: {
//     responsive: false,
//   },
// });
// let canvas = document.getElementById("myChart");
const data = canvas => {
  // // canvas.parentNode.style.height = '1280px';
  // // canvas.parentNode.style.width = '1280px';
  const ctx = canvas.getContext('2d');
  console.log('ctx=', ctx);
  const gradient = ctx.createLinearGradient(100, 0, 100, 2);
  // // const g = ctx.createLinearGradient(...);
  // // const data = [{ x: 'Jan', net: 100, cogs: 50, gm: 50 }, { x: 'Feb', net: 120, cogs: 55, gm: 75 }];
  // // const cfg = {
  // //   type: 'bar',
  // //   data: {
  // //     labels: ['Jan', 'Feb'],
  // //     datasets: [{
  // //       label: 'Net sales',
  // //       data: data,
  // //       parsing: {
  // //         yAxisKey: 'net'
  // //       }
  // //     }, {
  // //       label: 'Cost of goods sold',
  // //       data: data,
  // //       parsing: {
  // //         yAxisKey: 'cogs'
  // //       }
  // //     }, {
  // //       label: 'Gross margin',
  // //       data: data,
  // //       parsing: {
  // //         yAxisKey: 'gm'
  // //       }
  // //     }]
  // //   },
  // // };
  return {
    //   // backgroundColor: gradient,
    //   // labels: ['a', 'b', 'c'],
    //   // datasets: [{
    //   //   label: 'test label',
    //   //   backgroundColor: ['red', 'blue', 'green'],
    //   //   data: [100, 200, 300]
    //   //   // ...the rest
    //   // },
    //   // {
    //   //   backgroundColor: ['red',
    //   //     'red',
    //   //     'red'
    //   //   ],
    //   //   data: [150, 250, 350]
    //   //   // ...the rest
    //   // },
    //   //   // {
    //   //   //   backgroundColor: ['green',
    //   //   //     'green',
    //   //   //     'green'
    //   //   //   ],
    //   //   //   data: [{ id: 'Sales', nested: { value: 1500 } }, { id: 'Purchases', nested: { value: 500 } }],
    //   //   //   options: {
    //   //   //     parsing: {
    //   //   //       xAxisKey: 'id',
    //   //   //       yAxisKey: 'nested.value'
    //   //   //     }
    //   //   //   }
    //   //   //   // ...the rest
    //   //   // }
    //   // ],
    //   // options: {
    //   //   responsive: false
    //   // }

    //   // number,bayGate,bayBith,sellGate,sellBith,diffSell,diffBay,timeServer,timeBith,init
    //   // 1,0.61495762,0.61202401,0.61756266,0.6190815,-0.00553865,-0.00412388,1625823192271,1625823192373,true
    //   // 2,0.61495762,0.61202401,0.61756266,0.6190815,-0.00553865,-0.00412388,1625823192584,1625823192492,true
    //   // 3,0.61492768,0.61202401,0.61755264,0.6190815,-0.00552863,-0.00415382,1625823192830,1625823192492,false
    //   // 4,0.61439874,0.61202401,0.61800354,0.6190815,-0.00597953,-0.00468276,1625823193001,1625823192492,false
    backgroundColor: gradient, // что-то никакой разницы не видно
    labels: newDataY,
    datasets: [{
      label: 'A',
      // yAxisID: 'A',
      // backgroundColor: ['red', 'red', 'red', 'red', 'red'],
      backgroundColor: 'blue',
      borderColor: 'red',
      // color: "#F7464A",
      // fillColor: "rgba(255, 187, 0, 1)",
      // color: 'blue',
      data: [100, 96, 84, 76, 100, 96, 84, 76, 100, 96, 84, 76]
    }, {
      label: 'B',
      // yAxisID: 'B',
      borderColor: 'green',
      data: [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1]
    }]

    //   labels: ["January;2015", "February;2015", "March;2015", "January;2016", "February;2016", "March;2016"],
    //   datasets: [{
    //     label: '# of Votes',
    //     xAxisID: 'xAxis1',
    //     data: [12, 19, 3, 5, 2, 3]
    //   }]


  };
}


const options = {
  // scales: {
  //   yAxes: [{
  //     id: 'A',
  //     type: 'linear',
  //     // position: 'left',
  //   }, {
  //     id: 'B',
  //     type: 'linear',
  //     position: 'right',
  //     ticks: {
  //       max: 1,
  //       min: 0
  //     }
  //   }]
  // }

  // scales: {
  //   xAxes: [
  //     {
  //       id: 'xAxis1',
  //       type: "category",
  //       ticks: {
  //         callback: function (label) {
  //           var month = label.split(";")[0];
  //           var year = label.split(";")[1];
  //           return month;
  //         }
  //       }
  //     },
  //     {
  //       id: 'xAxis2',
  //       type: "category",
  //       gridLines: {
  //         drawOnChartArea: false, // only want the grid lines for one axis to show up
  //       },
  //       ticks: {
  //         callback: function (label) {
  //           var month = label.split(";")[0];
  //           var year = label.split(";")[1];
  //           if (month === "February") {
  //             return year;
  //           } else {
  //             return "";
  //           }
  //         }
  //       }
  //     }],
  //   yAxes: [{
  //     ticks: {
  //       beginAtZero: true
  //     }
  //   }]
  // }

  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis'
    }
  },
  scales: {

    // y1: {
    //   ticks: {
    //     // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
    //     // callback: function (val, index) {
    //     //   // Hide the label of every 2nd dataset
    //     //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
    //     // },
    //     color: 'red',
    //   }
    // },
    // y: {
    //   type: 'linear',
    //   display: true,
    //   position: 'left',
    // },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      // ticks: { color: 'red' },
      ticks: {
        // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        // callback: function (val, index) {
        //   // Hide the label of every 2nd dataset
        //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
        // },
        color: 'red',
      },
      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
    y2: {
      type: 'linear',
      display: true,
      position: 'left',
      // ticks: { color: 'red' },
      ticks: {
        // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        // callback: function (val, index) {
        //   // Hide the label of every 2nd dataset
        //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
        // },
        color: 'red',
      },
      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  }


}
export const Chart = () => {
  // const ref = useRef();
  return (
    <div >
      <h3 className="page-title white-text">About</h3>
      <div className="container">
        <blockquote>
          Я начинающий Back-end, Full Stack Nodejs разработчик, которому интересно создавать новое, пробираться через ошибки и проблемы, постоянно обучаться.
          Чувствую себя наполненным восторгом и эйфорией, как ребенок, видя результат своих творений, осознавая полезность своих способностей. dsds
                </blockquote>
        <div>
          <canvas id="myChart"></canvas>
        </div>
        <Line data={data}
          // ref={ref}
          // width={100}
          // height={50}
          // options={{ maintainAspectRatio: false }}
          options={options}
        />

      </div >
    </div>
  )
}
