// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';

// import { Line } from 'react-chartjs-2';
// import { DownloadCSV } from './DownloadCSV';
import { postData, getDataFileMemo, getDataFile, once } from '../functions/functions';//../hooks/message.hook
import ViewChart from './ViewChart';
import { DownloadCSV } from './DownloadCSV';
import { ChartDescription } from './ChartDescription';

async function getNamesFiles() {
  console.log('START function getNamesFiles()');
  try {
    console.log('END function getNamesFiles()');
    return await postData('/api/message/getdircsv', {})
  } catch (e) { console.log('ERROR function getNamesFiles', e) }
}

console.log('this index.js React');

async function firstLoadDataFile(nameFilesSelect) {
  try {
    const funOne = await getNamesFiles();
    funOne.namesFiles.reverse().forEach((elem) => nameFilesSelect.push(elem));
    console.log('nameFilesSelect_=', nameFilesSelect);
    const nameFile = funOne.namesFiles[0];
    console.log('nameFile firstLoadDataFile=', nameFile);
    return await getDataFile(nameFile)
  } catch (e) { console.log(e) }
}

export const Chart = () => {
  const [dataCsv, setDataCsv] = useState([]);//{ data: 'Данных еще нет' }
  const nameFilesSelect = useRef([]);

  const updateData = (value) => {
    setDataCsv(value)
  }

  const hook = () => {
    firstLoadDataFile(nameFilesSelect.current).then((loadfile) => {
      console.log('END twoAsyncFunction loadfile=', loadfile);
      setDataCsv(loadfile);
    })
  };
  // Tell react to run useEffect once the component is loaded
  useEffect(hook, []); // если указать files во втором парамметре массиве то бесконечный цикл
  // useEffect(() => {
  //   if (dataCsv.timeBith) {
  //     console.log('Chart.js useEffect dataCsv.timeBith.length=', dataCsv.timeBith.length)
  //   }
  //   console.log('Chart.js useEffect dataCsv=', dataCsv)
  // }, [dataCsv]);


  return (
    <>
      <ChartDescription />
      <section id="DownloadCSV">
        <DownloadCSV nameFilesSelect={nameFilesSelect.current} updateData={updateData} />
      </section>
      <ViewChart ViewChart={dataCsv} />
    </>
  )
}
