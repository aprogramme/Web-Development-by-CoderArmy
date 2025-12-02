// const str1 = "Aayush";                    // double coat ("")
// const str2 = 'Aayush Raj';                // single coat ('')
// const str3 = `Strike is coming soon`;     // backtick (``)
// console.log(str1, str2, str3); 

// const str1 = "Aayush";
// const str2 = 'Aayush Raj';
// console.log(str1, str2);
// const day = 18;
// const str3 = `Strike is coming soon on ${day}`;
// console.log(str3);


// String Methods---------------------
// const str = `Hello Coder Army`;
// console.log(str.length);
// console.log(str[1]);

// UpperCase---------------------
// console.log(str.toUpperCase());    // HELLO CODER ARMY  return new string

// LowerCase---------------------
// console.log(str.toLowerCase());    // hello coder army  return new string

// indexOf, lastIndexOf, includes---------------------
const str = `Hello Coder Army Coder`;
// console.log(str.indexOf('Cod'));      // first occurrence
// console.log(str.indexOf('cod'));      // -1 not found
// console.log(str.lastIndexOf('Cod'));
// console.log(str.includes('Arm'))      // true
// console.log(str.includes('arm'))      // false

// slice---------------------
// const str = `Hello Coder Army Coder`;
// console.log(str.slice(2, 5));        // 2 to 5-1 --> llo
// console.log(str.slice(2));           // 2 to end --> llo Coder Army Coder
// console.log(str.slice(-5));          // last 5 characters --> Coder
// console.log(str.slice(-5, -2));      // -5 to -3 --> Cod

// substring---------------------
// const str = `Hello Coder Army Coder`;
// console.log(str.substring(3, 6));  // No negative

// const a = "Aayush";
// const b = "Raj";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Aayush");       // 24 convert to string and add with Aayush --> 24Aayush
// console.log(24+"Aayush"+10);
// console.log(30+24+"Aayush");

// replace---------------------
// const str = `Hello Coder Army Coder`;
// console.log(str.replace("ode", "iam"));      // only first occurrence
// console.log(str.replaceAll("ode", "iam"));   // all occurrence

// trim---------------------
// const user = "  Rohit ";
// console.log(user);
// console.log(user.trim());           // trim spaces from start and end
// console.log(user.trimStart());      // trim spaces from start
// console.log(user.trimEnd());        // trim spaces from end

// split---------------------
// const names = "Rohit, Mohit, Aayush, Anjali";
// console.log(names.split(","));
// const names1 = "Rohit Mohit Aayush Anjali";
// console.log(names1.split(" "));
