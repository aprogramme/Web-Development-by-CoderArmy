// reduce --> reduce the array to a single value based on the logic provided

const arr = [34, 98, 12, 69, 76, 34];

const total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(total);

// Behind the scene working of reduce------------------
// arr.reducing = function() {
//     let accumulator = 0;
//     for(let num of this) {
//         accumulator += num;
//     }

//     return accumulator;
// }

// const total1 = arr.reducing();
// console.log(total1);

// to make function dynamic for all arrays we use "prototype"------
Array.prototype.reducing = function() {
    let accumulator = 0;
    for(let num of this) {
        accumulator += num;
    }

    return accumulator;
}

const total1 = arr.reducing();
console.log(total1);