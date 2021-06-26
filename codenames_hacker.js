const fs = require("fs");
const text = fs.readFileSync("input.txt", { encoding: "utf-8" });
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let colour = "blue";
rl.question("Which colour are you blue or red? (B/r):", function (name) {
  if (["r", "R", "red", "Red"].includes(name)) {
    colour = "red";
  } else if (name === "black") {
    colour = "black";
  } else if (!(!name || ["b", "B", "blue", "Blue"].includes(name))) {
    console.error("This is not a valid colour bro!");
    process.exit();
  }
  const colourRegEx = new RegExp(`coverCard\/${colour}\/[0-9]+`, "g");
  const rawList = text.match(colourRegEx);
  const numbers = rawList.map((str) => str.match(/[0-9]+/g));
  const words = numbers.map((num) => {
    const reg = new RegExp(`wordCard/${num}.+?"word":"([A-Z]+)`);
    return text.match(reg)[1];
  });
  rl.write(words.join() + "\n");
  rl.close();
});
