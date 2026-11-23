let n = 5;

for (i = 0; i < n * 2 - 1; i++) {
  let row = "";

  let start = i < n ? i + 1 : 2 * n - 1 - i;

  for (let j = 0; j < start; j++) {
    row += "*";
  }

  console.log(row);
}
