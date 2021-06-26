const fs = require("fs");
const text = fs.readFileSync("json.txt", { encoding: "utf-8" });

rawList = text.match(/coverCard\/blue\/[0-9]+/g);
numbers = rawList.map((str) => str.match(/[0-9]+/g));
words = numbers.map((num) => {
  const reg = new RegExp(`wordCard/${num}.+?"word":"([A-Z]+)`);
  return text.match(reg)[1];
});
console.log(words);
