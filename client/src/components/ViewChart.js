
import { Line } from 'react-chartjs-2';
const FONT_AXIS = { size: 16, style: 'italic' };
const FONT_TITLE_CHART = { size: 24, style: 'italic' };

let countViewChart = 0;

// function deepEqual(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }
let arrObjData = [];
function deepEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
let firstChange = false;
function ViewChart(props) {
  arrObjData.push(props);
  console.log('arrObjData.length=', arrObjData.length);
  if (arrObjData.length > 6) {
    console.log('deepEqual [0],[1]', deepEqual(arrObjData[0], arrObjData[1]));
    console.log('deepEqual [2],[3]', deepEqual(arrObjData[2], arrObjData[3]));
    console.log('deepEqual [4],[5]', deepEqual(arrObjData[4], arrObjData[5]));
    console.log('deepEqual [6],[7]', deepEqual(arrObjData[6], arrObjData[7]));
  }
  console.log('arrObjData=', arrObjData);
  console.log('props=', props);
  console.log('props.name=', props.name);
  // console.log('props.ViewChart.number=', props.ViewChart.number);

  countViewChart++;
  console.log('countViewChart=', countViewChart);
  if (props.ViewChart.number) {
    firstChange = true;
    console.log('ViewChart.js реальный файл данных передан');
    console.log('ViewChart.js props.ViewChart.number= ', props.ViewChart.number)
    // testDate = props.ViewChart;
  } else {
    console.log('ViewChart.js реальный файл данных НЕпередан');
  }

  if (firstChange) {
    console.log('ViewChart dataCsv=', props.ViewChart);
    // for (let key in props.ViewChart) {
    //   /* ... делать что-то с obj[key] ... */
    //   props.ViewChart[key].length = props.ViewChart.init.length;
    //   // obj[key]
    // }
    // console.log('props.dataCsv=', props.dataCsv);
    Line.animation = false;


    // { number: [], bayGate: [], bayBith: [], sellGate: [], sellBith: [], diffSell: [], diffBay: [], timeServer: [], timeGate: [], timeBith: [], percentBonus: [], bayOrSellGate: [], bayOrSellBith: [], init: [] };
    // records = [];

    // let testDate = {
    //   "number": [
    //     "702",
    //     "703",
    //     "704",
    //     "705",
    //     "706",
    //     "707",
    //     "708",
    //     "709",
    //     "710",
    //     "711",
    //     "712",
    //     "713",
    //     "714",
    //     "715"
    //   ],
    //   "bayGate": [
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95406804",
    //     "0.95375866",
    //     "0.95375866",
    //     "0.95364888"
    //   ],
    //   "bayBith": [
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566",
    //     "0.97220566"
    //   ],
    //   "sellGate": [
    //     "0.95805228",
    //     "0.95800218",
    //     "0.95799216",
    //     "0.95799116",
    //     "0.95798214",
    //     "0.95795208",
    //     "0.95798214",
    //     "0.95798214",
    //     "0.95798114",
    //     "0.95798214",
    //     "0.95795208",
    //     "0.95795108",
    //     "0.95795208",
    //     "0.95795208"
    //   ],
    //   "sellBith": [
    //     "0.99220871",
    //     "0.99220871",
    //     "0.99220871",
    //     "0.99220871",
    //     "0.99220871",
    //     "0.99220871",
    //     "0.99220871",
    //     "0.9921987",
    //     "0.9921987",
    //     "0.9921987",
    //     "0.9921987",
    //     "0.9921987",
    //     "0.9921987",
    //     "0.9921987"
    //   ],
    //   "diffSell": [
    //     "0.01415338",
    //     "0.01420348",
    //     "0.0142135",
    //     "0.0142145",
    //     "0.01422352",
    //     "0.01425358",
    //     "0.01422352",
    //     "0.01422352",
    //     "0.01422452",
    //     "0.01422352",
    //     "0.01425358",
    //     "0.01425458",
    //     "0.01425358",
    //     "0.01425358"
    //   ],
    //   "diffBay": [
    //     "-0.03814067",
    //     "-0.03814067",
    //     "-0.03814067",
    //     "-0.03814067",
    //     "-0.03814067",
    //     "-0.03814067",
    //     "-0.03814067",
    //     "-0.03813066",
    //     "-0.03813066",
    //     "-0.03813066",
    //     "-0.03813066",
    //     "-0.03844004",
    //     "-0.03844004",
    //     "-0.03854982"
    //   ],
    //   "timeServer": [
    //     "1632124312898",
    //     "1632124314048",
    //     "1632124314106",
    //     "1632124315201",
    //     "1632124315289",
    //     "1632124315458",
    //     "1632124316005",
    //     "1632124317785",
    //     "1632124319286",
    //     "1632124319397",
    //     "1632124319792",
    //     "1632124319883",
    //     "1632124319996",
    //     "1632124320691"
    //   ],
    //   "timeGate": [
    //     "1632124312640",
    //     "1632124313854",
    //     "1632124313926",
    //     "1632124314951",
    //     "1632124315046",
    //     "1632124315279",
    //     "1632124315844",
    //     "1632124317446",
    //     "1632124319043",
    //     "1632124319140",
    //     "1632124319547",
    //     "1632124319655",
    //     "1632124319722",
    //     "1632124320458"
    //   ],
    //   "timeBith": [
    //     "1632124310711",
    //     "1632124313863",
    //     "1632124313863",
    //     "1632124314413",
    //     "1632124314413",
    //     "1632124314413",
    //     "1632124314413",
    //     "1632124317710",
    //     "1632124317710",
    //     "1632124317710",
    //     "1632124317710",
    //     "1632124317710",
    //     "1632124317710",
    //     "1632124317710"
    //   ],
    //   "percentBonus": [
    //     "0.0148",
    //     "0.0148",
    //     "0.0148",
    //     "0.0148",
    //     "0.0148",
    //     "0.0149",
    //     "0.0148",
    //     "0.0148",
    //     "0.0148",
    //     "0.0148",
    //     "0.0149",
    //     "0.0149",
    //     "0.0149",
    //     "0.0149"
    //   ],
    //   "bayOrSellGate": [
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "2",
    //     "0",
    //     "1"
    //   ],
    //   "bayOrSellBith": [
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0",
    //     "0"
    //   ],
    //   "init": [
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "0",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1",
    //     "1"
    //   ],
    //   "names": [
    //     "Number",
    //     "bayGate",
    //     "bayBith",
    //     "sellGate",
    //     "sellBith",
    //     "diffSell",
    //     "diffBay",
    //     "timeServer",
    //     "timeGate",
    //     "timeBith",
    //     "percentBonus",
    //     "bayOrSellGate",
    //     "bayOrSellBith",
    //     "init"
    //   ]
    // }

    // testDate = dataCsv;

    // const dataY = ['104-1628959734593', '105-1628959734701', '106-1628959734802', '107-1628959734941', '108-1628959735001', '109-1628959735102', '110-1628959735209', '111-1628959735397', '112-1628959735499', '113-1628959735599', '114-1628959735704', '116-1628959735899', '117-1628959736010', '118-1628959736100'];
    // const bayGate = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];
    // const bayBith = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];
    // const sellGate = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];
    // const sellBith = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];
    // const diffSell = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];
    // const diffBay = [1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442, 1.22034442];
    // const bayOrSellGate = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0];
    // const bayOrSellBith = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0];
    // const init = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0];
    // const timeGate = [1628959734593, 1628959734701, 1628959734802, 1628959734941, 1628959735001, 1628959735102, 1628959735209, 1628959735397, 1628959735499, 1628959735599, 1628959735704, 1628959735899, 1628959736010, 1628959736100];
    // const timeBith = [1628959734593, 1628959734701, 1628959734802, 1628959734941, 1628959735001, 1628959735102, 1628959735209, 1628959735397, 1628959735499, 1628959735599, 1628959735704, 1628959735899, 1628959736010, 1628959736100];
    // const percentBonus = [0.1, 0.05, 0.03, 0.1, 0.05, 0.03, 0.1, 0.05, 0.03, 0.1, 0.05, 0.03, 0.1, 0.05];

    // let dataY = [1628959734593, 1628959734701, 1628959734802, 1628959734941, 1628959735001, 1628959735102, 1628959735209, 1628959735397, 1628959735499, 1628959735599, 1628959735704, 1628959735899, 1628959736010, 1628959736100];
    // let numberY = [104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117];

    // // имитация данных
    // let dataYTimeEnd = dataY[dataY.length - 1];
    // let arrMore = [];
    // let count = 118;
    // let bayOrSellGateFull = [...bayOrSellGate];
    // let bayOrSellBithFull = [...bayOrSellBith];

    // for (let i = 0; i < 15; i++) {
    //   dataYTimeEnd += 200;
    //   arrMore.push(dataYTimeEnd);
    //   numberY.push(count);
    //   count++;

    //   bayOrSellGateFull.push(getRandomIntInclusive(0, 1));
    //   bayOrSellBithFull.push(getRandomIntInclusive(0, 1));
    // }

    // function getRandomIntInclusive(min, max) {
    //   min = Math.ceil(min);
    //   max = Math.floor(max);
    //   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    // }

    // dataY = [...dataY, ...arrMore];
    // // bayOrSellGateFull.map((el, i, array) => {
    // //   // return array[i] = i % 2 === 0 ? '#566573' : 'green'
    // //   console.log('el[i]=', el[i]);
    // //   console.log('array[i]=', array[i]);
    // //   return array[i] = array[i] === 0 ? 1000 : 0
    // // });
    // // bayOrSellBithFull.map((el, i, array) => {
    // //   // return array[i] = i % 2 === 0 ? '#566573' : 'green'
    // //   console.log('el[i]=', el[i]);
    // //   console.log('array[i]=', array[i]);
    // //   return array[i] = array[i] === 0 ? 10000 : 0
    // // });
    // console.log('bayOrSellGateFull=', bayOrSellGateFull);



    // console.log('numberY[2].toString()=', typeof numberY[2].toString());
    // console.log('String', 'str');

    //////////////////////////////
    // Вставка реальных данных
    let testDate = props.ViewChart;
    let numberY = testDate.number;
    let dataY = testDate.timeServer;//

    function FusionNumberTime(timesArr) {
      let newDataY = timesArr.map((elem, index) => {
        let result = elem.toString();
        let numberToString = numberY[index].toString();
        result = numberToString + '-' + result.substring(result.length - 7);
        return result
      });
      return newDataY
    }

    let strtimeServer = FusionNumberTime(testDate.timeServer);// вместо newDataY
    let strtimeGate = FusionNumberTime(testDate.timeGate);
    let strtimeBith = FusionNumberTime(testDate.timeBith);

    let newDataY = dataY.map((elem, index) => {
      let result = elem.toString();
      let numberToString = numberY[index].toString();
      result = numberToString + '-' + result.substring(result.length - 7);
      return result
    });
    console.log(newDataY);
    let newDataY2 = newDataY.map((elem) => {
      return elem += '5';
    });
    console.log('newDataY2=', newDataY2);
    console.log('newDataY.length=', newDataY.length);
    // let colorArr2 = Array.from(Array(29), (elem, index) => {
    //   // console.log('elem=', elem);
    //   console.log('index=', index);
    //   // console.log('colorArr2[index]=', colorArr2[index]);
    //   // console.log('arr[index]=', arr[index]);
    //   return 'red'
    // });
    // console.log('colorArr2=', colorArr2);



    // colorArr.length = 29;
    // colorArr.fill('red');
    // console.log('colorArr=', colorArr);
    // colorArr.fill('red').map((el, i, array) => {
    //   return array[i] = i % 2 === 0 ? 'red' : 'green'
    // });
    // console.log('colorArr two =', colorArr);


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
      return {
        //   // number,bayGate,bayBith,sellGate,sellBith,diffSell,diffBay,timeServer,timeBith,init
        //   // 1,0.61495762,0.61202401,0.61756266,0.6190815,-0.00553865,-0.00412388,1625823192271,1625823192373,true
        //   // 2,0.61495762,0.61202401,0.61756266,0.6190815,-0.00553865,-0.00412388,1625823192584,1625823192492,true
        //   // 3,0.61492768,0.61202401,0.61755264,0.6190815,-0.00552863,-0.00415382,1625823192830,1625823192492,false
        //   // 4,0.61439874,0.61202401,0.61800354,0.6190815,-0.00597953,-0.00468276,1625823193001,1625823192492,false
        backgroundColor: gradient, // что-то никакой разницы не видно
        // labels: newDataY, //можно в опциях указывать не общий набор данный,  а отдельно для каждой оси х по отдельности
        datasets: [{
          label: 'bayOrSellGate',
          yAxisID: 'a',
          // backgroundColor: ['red', 'red', 'red', 'red', 'red'],
          // backgroundColor: 'blue',
          borderColor: 'red',
          // color: "#F7464A",
          // fillColor: "rgba(255, 187, 0, 1)",
          // color: 'blue',
          data: testDate.bayOrSellGate//bayOrSellGateFull
        }, {
          label: 'bayOrSellBith',
          yAxisID: 'b',
          borderColor: 'green',
          data: testDate.bayOrSellBith//bayOrSellBithFull
        },
          // {
          //   label: 'x',
          //   xAxisID: 'x',
          //   borderColor: 'green',
          //   data: newDataY
          // },
          // {
          //   label: 'x2',
          //   xAxisID: 'x2',
          //   borderColor: 'red',
          //   data: newDataY2
          // },
        ]

        //   labels: ["January;2015", "February;2015", "March;2015", "January;2016", "February;2016", "March;2016"],
        //   datasets: [{
        //     label: '# of Votes',
        //     xAxisID: 'xAxis1',
        //     data: [12, 19, 3, 5, 2, 3]
        //   }]

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
            // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            // callback: function (val, index) {
            //   // Hide the label of every 2nd dataset
            //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
            // },
            color: 'red',
            stepSize: 2,
            // major: true,
            // padding: 2
          }
        },
        // y: {
        //   type: 'linear',
        //   display: true,
        //   position: 'left',
        // },


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
          // ticks: { color: 'red' },
          ticks: {
            // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            // callback: function (val, index) {
            //   // Hide the label of every 2nd dataset
            //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
            // },
            color: 'green',
            stepSize: 2,
            // padding: 22

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
            // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            // callback: function (val, index) {
            //   // Hide the label of every 2nd dataset
            //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
            // },
            // callback: function (val, index) {
            //   // Hide the label of every 2nd dataset
            //   // return index % 2 === 0 ? this.getLabelForValue(val) : '';
            //   // return index % 2 === 0 ? this.getLabelForValue(val) : '1';
            //   return index % 2 === 0 ? this.getLabelForValue(val) : this.getLabelForValue(val + 1000_000)
            // },
            color: colorArr //colorArr через одного другой цвет'green'
            // color: Array(29).fill('red').map((el, i, array) => {
            //   return array[i] = i % 2 === 0 ? 'red' : 'green'
            // }) //colorArr через одного другой цвет'green'
          },
        },
        // yAxes: [{
        //   id: 'a',
        //   type: 'linear',
        //   position: 'left',
        // }, {
        //   id: 'b',
        //   type: 'linear',
        //   position: 'right',
        //   ticks: {
        //     max: 1,
        //     min: 0
        //   }
        // }]
        // y2: {
        //   type: 'linear',
        //   display: true,
        //   position: 'left',
        //   // ticks: { color: 'red' },
        //   ticks: {
        //     // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        //     // callback: function (val, index) {
        //     //   // Hide the label of every 2nd dataset
        //     //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
        //     // },
        //     color: 'green',
        //   },
        //   // grid line settings
        //   grid: {
        //     drawOnChartArea: false, // only want the grid lines for one axis to show up
        //   },
        // },
      }
    }

    const data2 = canvas => {
      // // canvas.parentNode.style.height = '1280px';
      // // canvas.parentNode.style.width = '1280px';
      const ctx = canvas.getContext('2d');
      console.log('ctx=', ctx);
      const gradient = ctx.createLinearGradient(100, 0, 100, 2);
      return {
        //   // number,bayGate,bayBith,sellGate,sellBith,diffSell,diffBay,timeServer,timeBith,init
        //   // 1,0.61495762,0.61202401,0.61756266,0.6190815,-0.00553865,-0.00412388,1625823192271,1625823192373,true
        //   // 2,0.61495762,0.61202401,0.61756266,0.6190815,-0.00553865,-0.00412388,1625823192584,1625823192492,true
        //   // 3,0.61492768,0.61202401,0.61755264,0.6190815,-0.00552863,-0.00415382,1625823192830,1625823192492,false
        //   // 4,0.61439874,0.61202401,0.61800354,0.6190815,-0.00597953,-0.00468276,1625823193001,1625823192492,false
        backgroundColor: gradient, // что-то никакой разницы не видно
        // labels: newDataY,
        datasets: [{
          label: 'percentBonus',
          yAxisID: 'a',
          // backgroundColor: ['red', 'red', 'red', 'red', 'red'],
          backgroundColor: 'blue',
          borderColor: 'green',
          // color: "#F7464A",
          // fillColor: "rgba(255, 187, 0, 1)",
          // color: 'blue',
          data: testDate.percentBonus//percentBonus
        }, {
          label: 'bayGate',
          yAxisID: 'b',
          borderColor: 'blue',
          data: testDate.bayGate//[1.22034442, 1.22044442, 1.22056442, 1.23034442, 1.22184442, 1.217034442, 1.21784442, 1.22034442, 1.22034442, 1.22774442, 1.22554442, 1.22034442, 1.22034442, 1.22094442]
        }, {
          label: 'bayBith',
          yAxisID: 'c',
          borderColor: '#bbdefb', //light blue
          data: testDate.bayBith//[1.23034442, 1.22054442, 1.21956442, 1.23034442, 1.22384442, 1.215034442, 1.21884442, 1.22834442, 1.22434442, 1.22574442, 1.22654442, 1.22334442, 1.22034442, 1.22294442]
        }, {
          label: 'sellGate',
          yAxisID: 'd',
          borderColor: 'red',
          data: testDate.sellGate//[1.25034442, 1.24954442, 1.24856442, 1.24934442, 1.24784442, 1.251034442, 1.25284442, 1.24634442, 1.24534442, 1.24874442, 1.25154442, 1.25434442, 1.25034442, 1.25294442]
        },
        {
          label: 'sellBith',
          yAxisID: 'e',
          borderColor: '#f8bbd0', //light- pink светло-розовый
          data: testDate.sellBith//[1.26034442, 1.25954442, 1.23856442, 1.26934442, 1.27784442, 1.261034442, 1.24284442, 1.25634442, 1.24934442, 1.23874442, 1.26154442, 1.26434442, 1.27034442, 1.26294442]
        }

        ]

        //   labels: ["January;2015", "February;2015", "March;2015", "January;2016", "February;2016", "March;2016"],
        //   datasets: [{
        //     label: '# of Votes',
        //     xAxisID: 'xAxis1',
        //     data: [12, 19, 3, 5, 2, 3]
        //   }]

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
              // if (context.parsed.y !== null) {
              //   label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
              // }
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
            // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            // callback: function (val, index) {
            //   // Hide the label of every 2nd dataset
            //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
            // },
            color: 'green',
          },
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
        // y: {
        //   type: 'linear',
        //   display: true,
        //   position: 'left',
        // },


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
          // ticks: { color: 'red' },
          ticks: {
            // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            // callback: function (val, index) {
            //   // Hide the label of every 2nd dataset
            //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
            // },
            color: 'blue', //#bbdefb голубой
            // format: new Intl.NumberFormat('en-IN', { maximumFractionDigits: 5 })
            // precision: 5,
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
        // y2: {
        //   type: 'linear',
        //   display: true,
        //   position: 'left',
        //   // ticks: { color: 'red' },
        //   ticks: {
        //     // // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        //     // callback: function (val, index) {
        //     //   // Hide the label of every 2nd dataset
        //     //   return index % 2 === 0 ? this.getLabelForValue(val) : '';
        //     // },
        //     color: 'green',
        //   },
        //   // grid line settings
        //   grid: {
        //     drawOnChartArea: false, // only want the grid lines for one axis to show up
        //   },
        // },
      }
    }

    return (

      <div>
        {/* <h3 className="page-title white-text">ViewChart</h3> */}
        {/* <div style={{ height: "500px", width: "1000px" }}> */}
        {/* <div style={{ height: "500px", width: "1000px" }}>
            <canvas id="myChart" style={{ display: "block", boxSizing: "border-box", height: "500px", width: "1000px" }}></canvas>
    </div> */}
        {/* <div style={{ overflow: "auto", height: "600px", width: "1000px" }} > */}
        {/* <div style={{ overflow: "auto" }} > */}
        {/* <div> */}
        {/* <div id="chartData2Up" style={{ width: "100%", overflowX: "auto" }}>
            <div id="chartData2Down" style={{ width: "920px", height: "460px" }}>    */}
        <div id="chartData2Up" >
          <div id="chartData2Down" >
            {/* <Line data={data2} id="ChartQuotation" style={{ height: "750", width: "0" }} */}
            <Line data={data2} id="ChartQuotation"
              // <div>
              // <Line data={data2} id="ChartQuotation"
              /* <Line data={data2} id="ChartQuotation" style={{ overflow: "scroll", height: "1000px", width: "2000px" }} */
              // ref={ref}
              // width={1000}
              // height={500}
              // options={{ maintainAspectRatio: false }}
              options={options2}
            />
          </div>
        </div>
        <hr width="85%" />
        <div id="chartData1Up" >
          <div id="chartData1Down" >
            <Line data={data}
              // ref={ref}
              // width={100}
              height={100}
              // options={{ maintainAspectRatio: false }}
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
