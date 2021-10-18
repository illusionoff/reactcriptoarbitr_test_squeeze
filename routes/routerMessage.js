const { Router } = require('express');
const router = Router();
// const quotes = require('../db/services/serviceQuotes');
const { check, validationResult, body } = require('express-validator'); // body дополнительно взял
const config = require('config');
const fetch = require('node-fetch');
// "FILES_FOLDER": "./testCSV/"
//let path = "../../178.20.42.150.sslip.io/html/logs/";
// Currently "../../projectSave/criptoarbitrsumsave/current_2/criptoarbitr_test/logs/"
const FILES_FOLDER = config.get('FILES_FOLDER');

const fs = require("fs");
const parse = require('csv-parse');
// const CSVFilePath = "./testCSV/test2_profit_651_1631860141152.csv";// путь берется от места вызова -> app.js

/* GET quotes listing. */
// '/api/message'
// Заменить после на POST
router.post('/',
  [
    // check('name', 'Вы ввели имя меньше двух символов или более 30 символов')
    body('name')
      // .notEmpty()
      // .withMessage("поле пустое")
      .isLength({ min: 3, max: 30 }) // .isEmpty() работает наоборот если не пусто то вызывает ошибку
      .withMessage("Вы ввели имя меньше трех символов или более 30 символов")
      .custom((value) => {
        // let regexp = /^[a-z0-9_-]{3,16}$/; // проверка
        // const regexp = /^([а-яё]+|[a-z0-9_-]){3,16}$/; // проверка  на name русские и латинские символы
        // const regexp = /^([а-яё]+|[a-z0-9_-]){3,30}$/; // проверка  на name русские и латинские символы
        // const regexp = /^([а-яё]+|[a-zA-Z-9_-]){3,30}$/; // проверка  на name русские и латинские символы
        const regexp = /^([а-яА-ЯёЁa-zA-Z0-9]){3,30}$/; // проверка  на name русские и латинские символы
        return regexp.test(value); // возвращает true либо false
      })
      .withMessage("Недопустимые символы в строке имени")
      .trim()
      .escape(),
    check('message', 'Минимальная длина сообщения 10 символов, а максимальная 1000')
      .isLength({ min: 10, max: 1000 })
  ], async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          // message: 'Некорректный данные при регистрации'
          message: errors.array()[0].msg
        })
      }

      const { name } = req.body
      let { message } = req.body
      console.log('routerMessage name', name);
      console.log('routerMessage name', message);
      // !!! использовал раньше "res.json(await quotes.getMultiple(name, message))" что вызывало ошибку, потому что уже res дали ответ и пытаюсь получается повторно отсылаю ответ браузеру


      res.status(201).json({ message: 'Сообщение доставлено' });

    } catch (err) {
      // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
      console.error(`Error while getting quotes `, err.message);
      // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });


const processFile = async (CSVFilePath) => {
  let count = 0;
  dataObj = { number: [], bayGate: [], bayBith: [], sellGate: [], sellBith: [], diffSell: [], diffBay: [], timeServer: [], timeGate: [], timeBith: [], percentBonus: [], bayOrSellGate: [], bayOrSellBith: [], init: [] };
  records = [];
  const parser = fs
    // .createReadStream(`${__dirname}/fs_read.csv`)
    .createReadStream(CSVFilePath)
    .pipe(parse({
      // CSV options if any
      // comment: '#',
      // columns: ['col', 'bayGate', 'bayBith', 'sellGate', 'sellBith', 'diffSell', 'diffBay', 'timeServer', 'timeBith', 'init']
      // columns: true
    }));
  for await (const record of parser) {
    // Work with each record
    records.push(record);
    if (count === 0) dataObj.names = record//console.log('Names=', record)
    else {
      // dataObj.number[count - 1] = record[0]; // можно и так
      // dataObj.number.push(record[0]);
      let countObj = 0;
      Object.keys(dataObj).forEach(key => {
        // elem[key]
        if (key != 'names') dataObj[key].push(record[countObj]);
        countObj++;
      })
    };

    count++;
  }
  // const length = Object.keys(dataObj).length;
  // console.log('length=', length); // 15
  return dataObj//records
}

// router.post('/getcsv',
//   [
//     // // check('name', 'Вы ввели имя меньше двух символов или более 30 символов')
//     // body('name')
//     //   // .notEmpty()
//     //   // .withMessage("поле пустое")
//     //   .isLength({ min: 3, max: 30 }) // .isEmpty() работает наоборот если не пусто то вызывает ошибку
//     //   .withMessage("Вы ввели имя меньше трех символов или более 30 символов")
//     //   .custom((value) => {
//     //     // let regexp = /^[a-z0-9_-]{3,16}$/; // проверка
//     //     // const regexp = /^([а-яё]+|[a-z0-9_-]){3,16}$/; // проверка  на name русские и латинские символы
//     //     // const regexp = /^([а-яё]+|[a-z0-9_-]){3,30}$/; // проверка  на name русские и латинские символы
//     //     // const regexp = /^([а-яё]+|[a-zA-Z-9_-]){3,30}$/; // проверка  на name русские и латинские символы
//     //     const regexp = /^([а-яА-ЯёЁa-zA-Z0-9]){3,30}$/; // проверка  на name русские и латинские символы
//     //     return regexp.test(value); // возвращает true либо false
//     //   })
//     //   .withMessage("Недопустимые символы в строке имени")
//     //   .trim()
//     //   .escape(),
//     // check('message', 'Минимальная длина сообщения 10 символов, а максимальная 1000')
//     //   .isLength({ min: 10, max: 1000 })
//   ], async function (req, res) {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({
//           errors: errors.array(),
//           // message: 'Некорректный данные при регистрации'
//           message: errors.array()[0].msg
//         })
//       }

//       const { name } = req.body
//       let { message } = req.body
//       console.log('routerMessage name', name);
//       console.log('routerMessage name', message);
//       // !!! использовал раньше "res.json(await quotes.getMultiple(name, message))" что вызывало ошибку, потому что уже res дали ответ и пытаюсь получается повторно отсылаю ответ браузеру

//       // List files working true
//       // const testFolder = './tests/';./testCSV/
//       //////////////////
//       // const testFolder = './testCSV/';
//       // fs.readdir(testFolder, (err, files) => {
//       //   files.forEach(file => {
//       //     console.log(file);
//       //   });
//       // });
//       //

//       // processFile("./testCSV/test2_profit_651_1631860141152.csv")
//       processFile(`${FILES_FOLDER}1631860141152_651_test2_profit.csv`)
//         // .then((result2) => { console.log('result2=', result2) })
//         // .then((dataObj) => { res.status(201).json({ message: dataObj }) })
//         // .then((dataObj) => { console.log('dataObj=', dataObj) })
//         .then((dataObj) => {
//           console.log('dataObj=', dataObj);
//           // res.status(201).json({ message: 'download CSV file' });
//           res.status(201).json({ message: dataObj });
//         })
//         .catch(console.error)

//       // res.status(201).json({ message: 'download CSV file' });

//     } catch (err) {
//       // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
//       console.error(`Error while getting quotes `, err.message);
//       // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
//       res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
//     }
//   });

router.post('/getdircsv',
  [], async function (req, res) {
    try {

      // return res.status(400).json({ message: 'Некорректный данные чтения имен файлов' })

      // !!! использовал раньше "res.json(await quotes.getMultiple(name, message))" что вызывало ошибку, потому что уже res дали ответ и пытаюсь получается повторно отсылаю ответ браузеру

      // List files working true
      // const testFolder = './tests/';./testCSV/
      // const testFolder = './testCSV/';
      let namesFiles = [];
      fs.readdir(FILES_FOLDER, (err, files) => {
        files.forEach(file => {
          namesFiles.push(file);
          console.log(file);
        });
        res.status(201).json({ namesFiles });

      });
      //


      // res.status(201).json({ message: 'read dir CSV files folder' });
      // res.status(201).json({ message: 'read dir CSV files folder' });


    } catch (err) {
      // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
      console.error(`Error while getting quotes `, err.message);
      // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });


router.post('/loadfile',
  [
    // check('name', 'Вы ввели имя меньше двух символов или более 30 символов')
    body('name')
      // .notEmpty()
      // .withMessage("поле пустое")
      .isLength({ min: 3, max: 50 }) // .isEmpty() работает наоборот если не пусто то вызывает ошибку
      .withMessage("Вы ввели имя меньше трех символов или более 30 символов")
      // .custom((value) => {
      //   // let regexp = /^[a-z0-9_-]{3,16}$/; // проверка
      //   // const regexp = /^([а-яё]+|[a-z0-9_-]){3,16}$/; // проверка  на name русские и латинские символы
      //   // const regexp = /^([а-яё]+|[a-z0-9_-]){3,30}$/; // проверка  на name русские и латинские символы
      //   // const regexp = /^([а-яё]+|[a-zA-Z-9_-]){3,30}$/; // проверка  на name русские и латинские символы
      //   const regexp = /^([а-яА-ЯёЁa-zA-Z0-9]){3,30}$/; // проверка  на name русские и латинские символы
      //   return regexp.test(value); // возвращает true либо false
      // })
      // .withMessage("Недопустимые символы в строке имени")
      .trim()
      .escape(),
    // check('message', 'Минимальная длина сообщения 10 символов, а максимальная 1000')
    //   .isLength({ min: 10, max: 1000 })
  ], async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          // message: 'Некорректный данные при регистрации'
          message: errors.array()[0].msg
        })
      }

      const { name } = req.body
      // let { message } = req.body
      console.log('routerMessage name', name);
      // console.log('routerMessage name', message);
      // !!! использовал раньше "res.json(await quotes.getMultiple(name, message))" что вызывало ошибку, потому что уже res дали ответ и пытаюсь получается повторно отсылаю ответ браузеру
      processFile(`${FILES_FOLDER}${name}`)
        // .then((result2) => { console.log('result2=', result2) })
        // .then((dataObj) => { res.status(201).json({ message: dataObj }) })
        // .then((dataObj) => { console.log('dataObj=', dataObj) })
        .then((dataObj) => {
          console.log('dataObj=', dataObj);
          // res.status(201).json({ message: 'download CSV file' });
          // res.status(201).json({ message: `Сообщение о загрузке файла доставлено:  ${name}` });

          res.status(201).json(dataObj);
        })
        .catch(console.error)

      // res.status(201).json({ message: `Сообщение о загрузке файла доставлено:  ${name}` });

    } catch (err) {
      // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
      console.error(`Error while getting quotes `, err.message);
      // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

module.exports = router;
