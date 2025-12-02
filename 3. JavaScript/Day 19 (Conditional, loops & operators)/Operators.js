// Arithmetic Operator-------------------------

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// console.log(5%2);
// console.log(5**3); // power 5*5*5

// Assignment Operator-------------------------

// let x = 20;
// let y = 10;
// x = x+y;
// x += y;
// x = x*y;
// x *= y;
// x = x-y;
// x -= y;
// console.log(x);

// Comparision Operator-------------------------

// let x = 10;
// let y = 20;
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x == y);

// String -> Number-------------
// let z = "10";
// let a = Number(z);
// console.log(a);
// console.log(typeof a);

// let z = 20;
// let a = "20";
// console.log(z == a);  // js convert 'a' into number 
// console.log(z === a); // first type check then compare

// let a = "121adf";
// let b = Number(a);
// console.log(b);
// console.log(typeof b);  // NaN -> Not a Number (typeof NaN = number)


// Number -> String-------------
// let a = 10;
// let b = String(a);
// console.log(b);
// console.log(typeof b);


// Boolean -> Number-------------
// console.log(Number(true));
// console.log(Number(false));


// null/undefined -> Number (null->0 and undefined->NaN)-------------
// console.log(Number(null));
// console.log(Number(undefined));

// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(undefined)); // "undefined"
// console.log(String(null)); // "null"


// Number -> Boolean-------------
// console.log(Boolean(12));  // true
// console.log(Boolean("Hello"));  // true;
// console.log(Boolean(0))  // false
// console.log(Boolean(""))  // false
// console.log(Boolean(undefined))  // false
// console.log(Boolean(null))  // false


// Computer science challenge-------------
// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// console.log(c == 0.3);  // false
// console.log(c);  // 0.30000000000000004

// 0.25 = Binary Number 
// 0.25 * 2 = 0.5  (0)
// 0.5 * 2 = 1.0  (1)
// 0 * 2 = 0
// 0.01(Binary conversion)

// 0.2 = Binary number 
// 0.2 * 2 = 0.4  (0)
// 0.4 * 2 = 0.8  (0)
// 0.8 * 2 = 1.6  (1)
// 0.6 * 2 = 1.2  (1)
// 0.2 * 2 = 0.4  (0)
// .
// .
// .
// 0.001100011000110...


// Rules---------------------
// 1. null is loosely equal to undefined only
// console.log(null == undefined);   // true
// console.log(null === undefined);  // false
// console.log(null == 0);  // false
// console.log(null == false);  // false

// 2. >, <, >=, <= (null --> number, undefined --> NaN)
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(null > 0);
// console.log(null < 0);
// console.log(null > undefined)


// 3. String comparison (lexicographical order - dictionary order) ASCII value
// console.log("Rohit" > "Mohit"); // true (R(82) > M(77)) ASCII value
// console.log(10 > "10"); 
// console.log(10 > true); // true (true -> 1)
// console.log(null >= ""); // true (null -> 0, "" -> 0)
// console.log(undefined < 1); // false (undefined -> NaN)
// console.log(NaN == NaN); // false (NaN is not equal to anything including NaN)


// Logical Operator--------------------
// &&, ||, !

// 1. Logical AND (&&)
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

let a = "Rohit";
let b = "Mohit";
let c = a&&b;
console.log(c);
//&&:  if first value is true, then return second value
//     if first value is false, no need to check second value so return false

// 2. Logical OR (||)
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

let d = 10;
let e = 20;
let f = d || e;
console.log(f);
// ||: if first value if true, return first value
//     if first value is false, return second value

// 3. Logical NOT (!)
console.log(4 != 5); // 4 not equal to 5
console.log(5 != 5);