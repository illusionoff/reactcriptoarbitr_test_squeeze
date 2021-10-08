// import React from 'react';
import React, { useState } from 'react';

// import { Line } from 'react-chartjs-2';
import ViewChart from './ViewChart';
import { DownloadCSV } from './DownloadCSV';

export const Chart = () => {
  const [dataCsv, setDataCsv] = useState({ data: 'Данных еще нет' });

  const updateData = (value) => {
    setDataCsv({ data: value })
  }
  return (
    <>
      <DownloadCSV updateData={updateData} />
      {/* <DownloadCSV /> */}
      {/* //dataCsv={dataCsv} */}
      <ViewChart dataCsv={dataCsv} />
    </>
  )
}
