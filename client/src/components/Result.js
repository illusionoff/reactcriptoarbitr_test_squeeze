import React from 'react';

export const Result = () => {
  return (
    <>
      <h3 className="page-title white-text">Research result</h3>
      <div className="container">

        <h5><p>  Результаты работы общие</p></h5>
        <ul className="browser-default">
          <li>По состоянию на 2021 год для регистрации и работы гражданам Республики беларусь доступно  ограниченное количество криптобирж. Это обусловлено санкциями в отношении Республики Беларусь. В результате были найдены биржы Gate.io и Bithamb.pro ( Bithamb Global).</li>
          <li>Была выбрана монета XRP (Ripple). Так как она имеет одну из самых малых комиссий на ввод вывод, а также минимальный лимит ввода - вывода.</li>
          <li>Время сбора данных с 7 сентября до 27 октября 2021 г. Максимальный процент прибыльной сделки составил 4.85% 14 октября 2021 г. В это время цены sell и buy на бирже Bithamb Global не менялись около 14.5 секунд (время “коридора”).</li>
          <li>Частота сделок с процентом прибыли от 2.5 до 4.85, в среднем более 5 в месяц.</li>
        </ul>
        <h5><p>  Результаты работы по критериям оценки</p></h5>

        <ul className="browser-default">
          <li><strong>1,2</strong> Время сбора данных с 7 сентября до 27 октября 2021 г. Максимальный процент прибыльной сделки составил 4.85% 14 октября 2021 г. </li>
          <li><strong>3.</strong> Анализ производительности проекта на тестовом сервере показал среднюю нагрузку CPU гораздо менее 10%, а используемой оперативной памяти менее 20%. При этом на этом же сервере работает и другой проект.</li>
          <li><strong>4.</strong> Частота сделок с процентом прибыли от 2.5 до 4.85 в среднем более 5 в месяц.</li>
          <li><strong>5.</strong> Средний пинг между серверами оказался около 119 мс. Итого умножаем на 3, получаем 357 мс - минимальное время “коридора”.
          14 октября 2021 г. прибыль составила 4.85%,в это время цены sell и buy на бирже Bithamp Global не менялись около 14.5 секунд (время “коридора”).</li>
        </ul>

      </div >
    </>
  )
}
