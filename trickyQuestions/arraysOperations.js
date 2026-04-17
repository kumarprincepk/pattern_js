// Find largest element in the nested array |||

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

// Move 0 in starting in array   |||

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


// flat array |||
// let arr  = [0,5,[0,3,[6,[9,[8],0],1],7],0];
// function fltArr(arr){
//     let newFltArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             newFltArr.push(...fltArr(arr[i]));
//         } else{
//             newFltArr.push(arr[i]);
//         }
//     }
//     return newFltArr;
// }
//console.log(arr.flat())
// console.log("Output flat Array: ", fltArr(arr))

// compare two array |||
// function compArr (arr1, arr2){
//     if(arr1.length !== arr2.length) return false;
//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// }
// let arr3  = [0,5,0,3,6,9,8,0,1,7,0];
// let arr4  = [0,5,0,3,6,9,8,5,1,4,0];
// console.log("compare array output", compArr(arr3, arr4))


// Largest Element ||
//  let arr = [7,0,5,0,3,6,0,1,0];
//   function largestElement (arr){
//     let larEle = 0;
//     for(let i = 0; i<arr.length; i++){
//       if(arr[i] > larEle){
//         larEle = arr[i]
//       }
//     }
//     return larEle;
//   }
//   console.log("largest element",largestElement(arr))


// second largest element ||
//  let arr = [7,0,5,0,3,6,0,1,0];
//   function secLargest (arr){
//     let larEle = 0;
//     let secLarEle  = 0;
//     for(let i = 0; i<arr.length; i++){
//       if(arr[i] > larEle){
//         secLarEle = larEle
//         larEle = arr[i]
//       } else if(arr[i]>secLarEle && arr[i] !== larEle){
//         secLarEle = arr[i]
//       }
//     }
//     return secLarEle;
//   }
// || or 
// function secLargest(arr){
//     let sortedArr = arr.sort((a,b)=>(b-a));
//     let uniqueArr = [...new Set(sortedArr)];
//     return uniqueArr[1]
// }
//   console.log("largest element",secLargest(arr))

// Find frequency of elements |||
// let ele =["a", "b", "a", "c", "b", "a"];
// function occuranceArrayElement(arr){
//     let result = {};
//     for(let i = 0; i < arr.length; i++){
//         let value = arr[i];
//         result[value] = result[value] ? result[value] + 1 : 1;
//     }
//     return result;
// }
// or ||
// function occuranceArrayElement(arr){
//     return arr.reduce((acc, val)=>{
//         acc[val] = (acc[val] || 0) + 1;
//         return acc;
//     },{})
// }
// console.log("output", occuranceArrayElement(ele))


