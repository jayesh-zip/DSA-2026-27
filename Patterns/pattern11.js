let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  let start = i % 2 == 0 ? 1 : 0;
  for (j = 0; j < i; j++) {
    start = 1 - start;
    row += start;
  }

  console.log(row);
}
