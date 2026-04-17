// compare two object

let obj1 = {name: "Prince", city:"Delhi"};
let obj2 = {name: "Prince", city:"Delhi"};
function compObj(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for(let i in obj1){
        if(obj1[i] !== obj2[i]){
            return false;
        }
    }
    return true;
}
compObj(obj1, obj2)