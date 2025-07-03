function trangPat(n){
    for(let row = 0; row<n; row++){
        let star = "";
        for(let col = n-row; col>0; col--){
            star += "* ";
        }
        console.log(star)
    }
}

trangPat(5)