// import React from 'react';
import React, { useState } from 'react';

// import { Line } from 'react-chartjs-2';
import ViewChart from './ViewChart';
import { DownloadCSV } from './DownloadCSV';

export const Chart = () => {
  const [dataCsv, setDataCsv] = useState({ data: 'Данных еще нет' });

  const updateData = (value) => {
    setDataCsv(value)
  }
  return (
    <>
      <div><h3 className="page-title white-text">Write to me</h3></div>
      <DownloadCSV updateData={updateData} />
      <ViewChart ViewChart={dataCsv} />

    </>
  )
}
