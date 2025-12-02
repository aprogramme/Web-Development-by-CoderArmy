// map --> modify each element of an array and return a new array

const arr = [10, 20, 50, 40, 30, 60];

// const newArr = arr.map((number) => number*2);
// console.log(newArr);

// behind the scenes working of map----------
// arr.mapping = function(modify) {   // this function is only for arr
//     const ans = [];
//     for(let num of this) {
//         ans.push(modify(num));
//     }

//     return ans;
// }

// const newArr = arr.mapping((number) => number*2);
// console.log(newArr);

// const arr2 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// const newArr2 = arr2.mapping((number) => number+5); // not working


// to make function dynamic for all arrays we use "prototype"------
Array.prototype.mapping = function(modify) {   // this function is only for arr
    const ans = [];
    for(let num of this) {
        ans.push(modify(num));
    }

    return ans;
}

const newArr = arr.mapping((number) => number*2);
console.log(newArr);

const arr2 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const newArr2 = arr2.mapping((number) => number+5); // not working
console.log(newArr2);