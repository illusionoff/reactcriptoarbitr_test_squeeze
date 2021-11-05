<a id="anchor"></a>
#####README.markdown

Criptoarbitr
=============
Исследовательский проект
--------

####Проект Criptoarbitr это исседование возможности извлечения прибыли на разнице курсов между двумя криптобиржами (межбиржевой арбитраж).

При успешном выполнении всех требований, перечисленных ниже, разработка нового проекта прототипа на основе дынных исследований.

Основные функции:
----

* Получение данных котировок в реальном времени по спотовому рынку выбранной криптовалюты с бирж Gate.io и Bithamb.pro
* Получение данных по комиссиям криптобиржи Bithamb.pro запись данных в .csv файл о котировках, дополнительных параметрах
* Активация записи данных в .csv файл по заданному значению необходимой прибыли и выбор направления торговли
* Сбор статитстики и анализ скорости поступления сигналов с биржи Bithamb.pro
* Загрузка актуальных файлов для визуализации с каталога запущенного проекта
* Визуализация данных в виде диаграмм
* Адаптивный дизайн


 В ходе разрабоки проекта были задействованы следующие технологии, модули:
 ----

Название | описание
:----|:---------
Node.js| среда выполнения
npm | менеджер пакетов
Express| библиотека
handlebars| шаблонизатор для страниц Html
bcrypt| хеширования паролей
crypto| хеширования строки для изменения забытого пароля
connect-flash|  для хранения и передачи сообщений
connect-mongodb-session|  для хранения сеансов в MongoDB
csurf|  для защиты сеансов сессии от подделки- взлома
express-validator|  валидация форм
winston|  логирование
helmet| защита приложений express через различные заголовки HTTP
moment-timezone|  поддержка часовых поясов IANA для Moment.js
mongoose| ODM ждя MongoDB
nodemailer| отправка почты
passport| авторизация, решистрация через соцсети и т.д.
underscore| библиотека функций. Использую для проверки на корректную дату _.isDate(date)
eslint| выявление ошибок в коде
prettier| форматирование кода и автоформатирование при сохранении
mocha|  автотесты
nodemon|  автоматического перезапуска проекта при изменении файлов проекта в dev
v1.0.0_materialize.min.js|Frontend библиотека
fontawesomecom | Иконки
https://cdn.jsdelivr.net/npm/chart.js@2.9.4 | диаграммы

Дополнительные модули:
----
express-handlebars
express-session
express-winston
passport-facebook
passport-google-oauth20
passport-local
eslint-config-airbnb-base
eslint-config-prettier
eslint-plugin-html
eslint-plugin-import
eslint-plugin-mocha
eslint-plugin-node
eslint-plugin-prettier

Автотесты:
----
* Проверяем функцию defaultView  изменение цвета категорий в соотвествии с ```default = req.user.calc.costs.categories.name```
[testDefaultView.js](https://github.com/illusionoff/homemoneycalc/blob/main/mochaTesting/thisProject/defaultView/testDefaultView.js) <br/>
Запуск: "npm run test2"

* Проверяем функцию monthOrYearView  вывода информации по выбранному месяцу или году в виде массивов для отображения в талице на frontend
[testMonthOrYearView.js](https://github.com/illusionoff/homemoneycalc/blob/main/mochaTesting/thisProject/monthOrYearView/testMonthOrYearView.js) <br/>
Запуск: "npm test"

[Вверх](#anchor)