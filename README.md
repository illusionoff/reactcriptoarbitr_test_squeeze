<a id="anchor"></a>
##### README.markdown

Criptoarbitr
=============
Исследовательский проект
--------

#### Проект Criptoarbitr это исследование возможностей извлечения прибыли на разнице курсов между двумя криптобиржами (межбиржевой арбитраж).

При успешном выполнении всех требований, перечисленных ниже, разработка нового проекта прототипа на основе данных исследований.

Сайт проекта: [Criptoarbitr](http://criptoarbitr.178.20.42.150.sslip.io/)

Основные функции:
----

* Получение данных котировок в реальном времени по спотовому рынку выбранной криптовалюты с бирж Gate.io и bithumb.pro
* Получение данных по комиссиям криптобиржи bithumb.pro запись данных в .csv файл о котировках, дополнительных параметрах
* Активация записи данных в .csv файл по заданному значению необходимой прибыли и выбор направления торговли
* Сбор статитстики и анализ скорости поступления сигналов с биржи bithumb.pro
* Загрузка актуальных файлов для визуализации с каталога запущенного проекта
* Визуализация данных в виде диаграмм
* Адаптивный дизайн

Проект состоит из двух back-end приложений и одного front-end приложения:

**back-end :**
* [criptoarbitr_test](https://github.com/illusionoff/criptoarbitr_test) - основное приложения
* [testsqueezebith](https://github.com/illusionoff/testsqueezebith) - вспомогательное приложения

**front-end :**
* [reactcriptoarbitr_test_squeeze](https://github.com/illusionoff/reactcriptoarbitr_test_squeeze) - размещение информации о проекте, вывод данных работы проекта в виде графиков

**Функции criptoarbitr_test :**
* Загрузка данных о комиссиях двух бирж и интересующих монетах
* Получение данных о котировках выбранной монеты с двух бирж одновременно
* Сравнение котировок между двумя биржами с учетом комиссий
* Принятие решения - получение сигнала при достижении необходимой прибыли ( профита)
* Запись данных в .CSV файл основных параметров котировок с максимальной детализацией

**Функции testsqueezebith :**
* Анализ скорости (ping) поступления информации о котировках между своим сервером и биржой Bithump Global (Bithumb.pro)
* Запись данных в файл при превышении 1.5% цены вверх или вниз от средней цены за последние 5 минут
* Запись всех данных в файл :
* цена sell, buy
    + время сервера Bithump источник №1
    + время сервера Bithump источник №2
    + разница времени между “своим” сервером и двумя источниками времени Bithump
    + нахождение средней разницы во времени между “своим” сервером и двумя источниками времени Bithump
* Принятие решения - получение сигнала при достижении необходимой прибыли ( профита)
* Запись данных в .CSV файл основных параметров котировок с максимальной детализацией

**Примечание: под “своим” сервером, подразумевается сервер, на котором будет разворачиваться проект**
* Нахождение пяти точек, имеющих наибольшее отклонение от среднего значения цены за последние 5 минут по sell и buy

**Функции reactcriptoarbitr_test_squeeze :**
* Описание проекта в виде web приложения
* Загрузка файлов статистики работающего проекта
* Визуализация данных из файлов в виде графиков

 В ходе разрабоки проекта были задействованы следующие технологии, модули:
 ----

Название | описание
:----|:---------
Node.js| среда выполнения
npm | менеджер пакетов
pm2 | менеджер процессов для приложений Node.js
React| front-end framework
Express| библиотека/framework
express-validator|  валидация форм
eslint| выявление ошибок в коде
mocha|  автотесты
nodemon|  автоматического перезапуска проекта при изменении файлов проекта в dev
v1.0.0_materialize.min.js|Frontend библиотека
ws| реализация клиента и сервера WebSocket
reconnecting-websocket| автоматическое переподключение, если соединение было закрыто
chart.js | диаграммы
react-chartjs-2 | диаграммы в React для chartjs
config | библиотека конфигурационных данных
csv-parse | парсинг .csv файлов
kill-port | уничтожение процесса на определенном порту
node-fetch | аналог window.fetchAPI для node.js
concurrently | одновременное выполнение нескольких команд, процессов
cross-env | использование переменных среды на разных платформах


Автотесты:
----
* Проверяем функцию processFile, которая читает файл.csv, парсит его при помощи csv-parse и возвращает объект удобный для отрисовки графиков
[testReadDataFromFile.js](mochaTesting/processFile/testReadDataFromFile.js) <br/>
Запуск: "npm run test"

[Вверх](#anchor)
