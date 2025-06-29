function sqrPat(n){
  for(let i = 0; i<n; i++){
    let row = "";
    for(let j = 0; j<n;j++){
      row += "* "
    }
    console.log(row)
  }
}

let pattern = sqrPat(5);
console.log(pattern)


// output 

// * * * * *
// * * * * *
// * * * * *
// * * * * *