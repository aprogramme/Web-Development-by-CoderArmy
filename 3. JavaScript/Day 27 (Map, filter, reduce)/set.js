// set------------- --> set is a collection of unique values

const arr = [2, 3, 4, 5, 3, 2, 1, 4, 5, 6, 7, 8, 7];
console.log(arr);

// to remove duplicates from array using set
const s1 = new Set(arr);
console.log(s1);

s1.add(10);
console.log(s1);

console.log(s1.has(5));  // true 5 is present in set

s1.delete(3);
console.log(s1);

console.log(s1.size);

s1.clear();
console.log(s1);

// to convert set back to array
const unique = [...new Set(arr)];
console.log(unique);


// Map-------------------
const m1 = new Map([
    ["Aayush", 1],
    [2, "Rohan",],
    [true, 11],
    [[10, 20, 30], "Anjali"],
    [{id:1, name:"Rohit"}, "Developer"]
]);

// m1.set(false, 50);
// console.log(m1);

for(let [keys, value] of m1) {
    console.log(keys, value);
}
