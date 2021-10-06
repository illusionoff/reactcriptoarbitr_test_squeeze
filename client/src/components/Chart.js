// import React from 'react';
// import React, { useState, useEffect } from 'react';

// import { Line } from 'react-chartjs-2';
import ViewChart from './ViewChart';
import { DownloadCSV } from './DownloadCSV';

export const Chart = () => {

  return (
    <>
      <DownloadCSV />
      <ViewChart />
    </>
  )
}
