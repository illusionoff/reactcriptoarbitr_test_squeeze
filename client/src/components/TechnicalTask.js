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

          <h5><p>Требования, критерии оценки результатов.</p></h5>
          <ul className="browser-default">
            <li>Минимальный процент прибыльности сделки равен 5%. </li>
            <li>Средний процент прибыльности сделки не менее 8%.</li>
            <li>Производительность тестового сервера - загрузка CPU средняя не выше 35%.</li>
            <li>Частота подходящих сделок не менее трех в месяц.</li>
            <li>Время “коридора” приемлемого профита не менее времени среднего пинга до двух серверов умноженное на 3.</li>
          </ul>

          <h5><p> Технологии</p></h5>
          <span className="bold-text">Серверное железо :</span>
          <ul className="browser-default">
            <li>VPS (VDS) </li>
            <li>1 ядро CPU, 1 Gb оперативной памяти</li>
            <li>SSD 5 Gb</li>
          </ul>

          <span className="bold-text">Серверные (Back-end) технологии :</span>
          <ul className="browser-default">
            <li>Node.js</li>
            <li>nginx</li>
            <li>Express</li>
          </ul>

          <span className="bold-text">Технологии клиента:</span>
          <ul className="browser-default">
            <li>современный браузер, мобильный браузер (2021 г.)</li>
          </ul>

          <span className="bold-text">Front-end технологии :</span>
          <ul className="browser-default">
            <li>React 17</li>
            <li>materialize.css 1.0</li>
          </ul>

          <h5><p> Сценарий реализации проекта</p></h5>
          <ul className="browser-default">
            <li>Поиск и выбор двух криптобирж доступные для граждан Республики Беларусь значительно отличающимися по объемам торговли, по выбранной паре криптовалют.</li>
            <li>Выбор торгуемой криптовалюты с минимальными комиссиями и лимитами на ввод-вывод.</li>
            <li>Получение данных по комиссиям двух бирж.</li>
            <li>Использование API криптобирж  (далее бирж) для получения данных котировок в реальном времени, максимально быстро.
            Анализ производительности проекта на тестовом сервере.</li>
            <li>Реализация алгоритма принятия решения о покупке/продаже.</li>
            <li>Запись данных в .CSV файл основных параметров котировок с максимальной детализацией.</li>
          </ul>
        </div >
      </div>
    </>
  )
}
