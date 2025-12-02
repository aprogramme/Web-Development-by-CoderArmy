// const currDate = new Date();
// console.log(currDate);        //UTC : Universal Coordinated Time
// console.log(currDate.toString());

// console.log(currDate.toISOString());
// console.log(currDate.toLocaleString());

// console.log(currDate.getDay());
// console.log(currDate.getDate());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());  // month no. start from 0
// console.log(currDate.getHours());
// console.log(currDate.getMinutes());
// console.log(currDate.getSeconds());

// days: Mon-Sun (1 based)
// Month: Jan-Dec (0 based)
// year month date hour minute second millisecond
// const dat = new Date(2025, 8, 20, 8, 25, 15, 125);
// console.log(dat);
// console.log(dat.toString());

const now = Date.now();
console.log(now);  // millisecond
// const dates = new Date(now);
// console.log(dates);

const dates = new Date(0); // timestamp
console.log(dates.toString());

// const dates = new Date(-123453324);  // date before 1970
// console.log(dates); 