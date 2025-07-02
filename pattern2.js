function trngPat(n) {
  for (let row = 0; row < n; row++) {
    let star = "";
    for (let col = n; col >= n - row; col--) {
      star += "* "
    }
    console.log(star)
  }
}

trngPat(5)

// output

// *
// **
// ***
// ****
// *****