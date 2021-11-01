export const DevelopmentDescription = () => {
  return (
    <>
      <h3 className="page-title white-text">Development description</h3>
      <div className="container">
        <h5><p>  Проект состоит  из двух back-end приложений и одного front-end приложения</p></h5>
        <span className="bold-text">back-end :</span>
        <ul className="browser-default">
          <li>criptoarbitr_test - основное приложения</li>
          <li>testsqueezebith - вспомогательное приложения</li>
        </ul>

        <span className="bold-text">front-end:</span>
        <ul className="browser-default">
          <li>reactcriptoarbitr_test_squeeze - размещение информации о проекте, вывод данных работы проекта  в виде графиков.</li>
        </ul>


        <span className="bold-text">Функции  criptoarbitr_test :</span>
        <ul className="browser-default">
          <li>Загрузка данных о комиссиях двух бирж и интересующих монетах.</li>
          <li>Получение данных о котировках выбранной монеты с двух бирж одновременно.</li>
          <li>Сравнение котировок между двумя биржами с учетом комиссий.</li>
          <li>Принятие решения - получение сигнала при достижении необходимой прибыли ( профита).</li>
          <li>Запись данных в .CSV файл основных параметров котировок с максимальной детализацией.</li>
        </ul>

        <span className="bold-text">Функции  testsqueezebith :</span>
        <ul className="browser-default">
          <li>Анализ скорости (ping) поступления информации о котировках между своим сервером и биржой Bithump Global (Bithumb.pro).</li>
          <li>Запись данных в файл  при превышении 1.5% цены вверх или вниз от средней цены за последние 5 минут.</li>
          <li>Запись всех данных в файл:
            <ul className="browser-default">
              <li>цена sell, buy;</li>
              <li>время сервера Bithump  источник №1;</li>
              <li>время сервера Bithump  источник №2;</li>
              <li>разница времени между “своим” сервером и двумя источниками времени Bithump;</li>
              <li>нахождение средней разницы во времени между “своим” сервером и двумя источниками времени Bithump;</li>
            </ul>
          </li>
          <li>Принятие решения - получение сигнала при достижении необходимой прибыли ( профита).</li>
          <li>Запись данных в .CSV файл основных параметров котировок с максимальной детализацией.</li>

          <blockquote>
            Примечание: под “своим” сервером, подразумевается сервер, на котором будет разворачиваться проект.
          </blockquote>
          <li>Нахождение пяти точек, имеющих наибольшее отклонение от среднего значения цены за последние 5 минут по sell и buy.</li>
        </ul>

        <span className="bold-text">Функции  reactcriptoarbitr_test_squeeze :</span>
        <ul className="browser-default">
          <li>Описание проекта в виде web приложения.</li>
          <li>Загрузка файлов статистики работающего проекта.</li>
          <li>Визуализация данных из файлов в виде графиков.</li>
        </ul>

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
