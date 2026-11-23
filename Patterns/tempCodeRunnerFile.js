let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    // Spaces
    for (let j = 0; j < i; j++) {
        row += " ";
    }

    // Stars
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        row += "*";
    }

    console.log(row);
}
