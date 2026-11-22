const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of rows and columns: ", function (input) {
  let n = Number(input);

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += "* ";
    }

    console.log(row);
  }

  rl.close();
});
