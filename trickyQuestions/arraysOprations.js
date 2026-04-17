// in this nested array find the largest array's element

// let arrOne = [[3,5,1],[7,2],[6,4],[9]];
//   function arrFun(arr){
//       let max = arr[0][0];
//       for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//           if(arr[i][j]>max){
//             max = arr[i][j]
//           }
//         }
//       }
//       return max;
// }
// console.log("output function", arrFun(arrOne))

// Output is 9


//  let arr  = [0,5,0,3,6,9,8,0,1,7,0];
    // function arrRun (arr){
    //     let resultIndex = 0;
    //     for(let i = 0; i<arr.length; i++){
    //         if(arr[i] === 0){
    //             [arr[i],arr[resultIndex]] = [arr[resultIndex], arr[i]];
    //             resultIndex++;
    //         }
    //     }
    //     return arr;
    // }

    // Output is  [ 0, 0, 0, 0, 6, 9, 8, 5, 1, 7, 3 ]
    
    //    function arrRun (arr){
    //     let zeros = [];
    //     let nonZeros = [];
    //     for(let i = 0; i<arr.length; i++){
    //         if(arr[i] === 0){
    //             zeros.push(0);
    //         } else {
    //             nonZeros.push(arr[i])
    //         }
    //     }
    //     return [...zeros, ...nonZeros];
    // }

    // Output is [ 0, 0, 0, 0, 5, 3, 6, 9, 8, 1, 7 ]

    // console.log(">>>>",arrRun(arr))


    // flat array
let arr  = [0,5,[0,3,[6,[9,[8],0],1],7],0];
function fltArr(arr){
    let newFltArr = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newFltArr.push(...fltArr(arr[i]));
        } else{
            newFltArr.push(arr[i]);
        }
    }
    return newFltArr;
}

console.log("Output flat Array: ", fltArr(arr))