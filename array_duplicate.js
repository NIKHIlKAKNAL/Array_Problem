// Remove duplicate values
// this is bruteforce solution - O(n^2)

// function removeDupllicate(arr) {
    
//     uniqueArray = [];

//     for(let i =0;i<arr.length;i++){
//         isDuplicate = false;

//         for(let j = 0;j<uniqueArray.length;j++){
//             if(arr[i] === uniqueArray[j]){
//                 isDuplicate = true;
//             }
            
//     }
//     if(!isDuplicate){
//         uniqueArray.push(arr[i]);
//         // console.log(uniqueArray)
//     }

//     }
//     return uniqueArray;
// }

// fastest and simplest

// function removeDupllicate(arr){
//     return [...new Set(arr)];
// }


arr = [23,18,22,4,43,26,4,15,1]
arr.sort((a, b) => a - b)
console.log(arr) // [1,2,3]
lengthArr = Math.round(arr.length/3)
console.log(lengthArr)
sum = 0;
for(let k = 0 ; k<lengthArr ; k++){
    sum += arr[lengthArr + 2*k]
}
console.log(sum) 