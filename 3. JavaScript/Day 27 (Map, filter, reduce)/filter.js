// filter --> return new array with elements that pass the test

const arr = [10, 30, 50, 69, 90, 54];

// true: select, false: reject
// const newArr = arr.filter((number) => number > 50);
// const newArr = arr.filter((number) => {
//     return number > 50;
// })
// console.log(newArr);

// behind the scenes working of filter----------
// arr.filtering = function(compare) {    // this function is only for arr
//     const ans = [];
//     for(let num of this) {
//         if(compare(num)) {
//             ans.push(num);
//         }
//     }

//     return ans;
// }
// const newArr = arr.filtering((num) => num > 50);
// console.log(newArr);

// // filtering function not works for arr2 because it is defined only for arr
// const arr2 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// const newArr2 = arr2.filtering((num) => num%2 === 0);
// console.log(newArr2);


// to make function dynamic for all arrays we use "prototype"------
Array.prototype.filtering = function(compare) {    // this function is only for arr
    const ans = [];
    for(let num of this) {
        if(compare(num)) {
            ans.push(num);
        }
    }

    return ans;
}
const newArr = arr.filtering((num) => num > 50);
console.log(newArr);

// filtering function not works for arr2 because it is defined only for arr
const arr2 = [23, 40, 79, 88, 91, 56, 90, 20];
const newArr2 = arr2.filtering((num) => num%2 === 0);
console.log(newArr2);