function trangPat(n) {
  for (let row = 0; row < n; row++) {
    let spaces = " ".repeat(row);
    let stars = "*".repeat(n - row);
    console.log(spaces + stars);
  }
}

trangPat(5);
