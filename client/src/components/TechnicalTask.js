import React from 'react';

export const TechnicalTask = () => {
  return (
    <>
      <h3 className="page-title white-text">Technical task</h3>
      <div >
        <div className="container">
          {/* <blockquote></blockquote> */}
          <h5><p>Общая информация о проекте.</p></h5>
          Исседование возможности извлечения прибыли на разнице курсов между двумя криптобиржами (межбиржевой арбитраж).
          <h5><p> Технологии</p></h5>
          Серверное железо :
          <div className="padding-left_li">
            {/* <ul> */}
            <li>VPS (VDS) </li>
            <li>1 ядро CPU, 1 Gb оперативной памяти</li>
            <li>SSD 5 Gb</li>
            {/* </ul> */}
          </div>
Серверные (Back-end) технологии:
	Node.js
	nginx
Технологии клиента:
	современный браузер, мобильный браузер (2021 г.)
Front-end технологии:
	React 17
materialize.css 1.0


        </div >
      </div>
    </>
  )
}
