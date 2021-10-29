// Проверяем функцию defaultView  изменение цвета категорий в соотвествии с default = req.user.calc.costs.categories.name
const assert = require("assert").strict;
const fs = require("fs");
const { processFile } = require("../../routes/routerMessage.js");
// const FILES_FOLDER = config.get('FILES_FOLDER');
const FILE_NAME = "file.csv";

const fileContent = fs.readFileSync(
  // "./mochaTesting/thisProject/defaultView/days.json",
  `./mochaTesting/thisProject/${FILE_NAME}`,
  // "file.csv",
  "utf8"
);
console.log('fiel.csv fs read', fileContent);


processFile(`${FILE_NAME}`)
  .then((dataObj) => {
    // res.status(201).json(dataObj);
    console.log(json(dataObj))
  })
  .catch(console.error)
// const days = JSON.parse(fileContent);

/* global describe, it */
// describe("defaultView test", function () {
//   it("should view day0", function () {
//     const dayIndex = 0;
//     defaultView(defaultName, defaultColor, day0, dayIndex, days);
//     assert.deepStrictEqual(days[0].colorCategories, [
//       "green",
//       "teal",
//       "blue",
//       "green",
//     ]);
//   });

//   it("should view day1", function () {
//     const dayIndex = 1;
//     defaultView(defaultName, defaultColor, day1, dayIndex, days);
//     assert.deepStrictEqual(days[1].colorCategories, [
//       "aqua",
//       "teal",
//       "blue",
//       "navy",
//     ]);
//   });
// });
