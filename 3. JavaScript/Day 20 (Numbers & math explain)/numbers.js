// Number--------------------------------------
// let a = 10;
// console.log(a);

// let b = 234.4845;
// console.log(b);
// console.log(b.toFixed(2));  // upto 2 digits after decimal
// console.log(typeof b.toFixed(2));  // return new string
// let c = b.toFixed(2); // return new value 
// console.log(typeof c); // string
// console.log(b.toPrecision(4)); // total digits
// console.log(b.toString());

// Object-----------------------
// let a = new Number(20);  // to create number as a object
// console.log(a);
// console.log(typeof a);  // object
// let b = new Number(20);
// console.log(a == b);  // false: reference compare (both a and b are pointing different objects)

// Boolean ----------------------------------
// console.log(Boolean(0));  // false
// console.log(Boolean(new Number(0)));  // true: object is always true
// console.log(Boolean("")); // false
// console.log(Boolean(new Number([])));  // true
// console.log(Boolean({}));  // true

// Non Primitive: Reference based compare
// Primitive: Copy by value

let a = 10; 
let b = 10;
console.log(a==b);  // true: value compare

// Math----------------------------------------
// console.log(Math.abs(-4));        // 4
// console.log(Math.PI);             // 3.141592653589793
// console.log(Math.SQRT2);          // Square root of 2
// console.log(Math.LN10);           // Natural log of 10
// console.log(Math.ceil(5.3));      // upward round 6
// console.log(Math.floor(5.3));     // downward round 5
// console.log(Math.log10(200))       
// console.log(Math.max(2,5,1,8,6)); // 8

// console.log(Math.random());  // (0 - 1): 0 include, 1 exclude [0, 1)

// (0-9): random value : multiply by 10
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)+1); // (1 to 10)

// (1-6) random value : multiply by 6
// console.log(Math.random()*6);
// console.log(Math.floor(Math.random()*6));
// console.log(Math.floor(Math.random()*6)+1); // (1 to 6)

// console.log(Math.floor(Math.random()*20)+1); // (1-20) random value

// (15-25) random value
// console.log(Math.random()*11);
// console.log(Math.floor(Math.random()*11));
// console.log(Math.floor(Math.random()*11)+15);

// Formula-------------------------------------
// Math.floor(Math.random()*(max-min+1))+min

// OTP Generate: 4 digit: (1000 - 9999)
// console.log("OTP : ",Math.floor(Math.random()*(9999-1000+1)))+1000;

