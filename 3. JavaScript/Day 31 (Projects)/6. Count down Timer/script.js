
setInterval(() => {
    const result = document.getElementById('result')

    const currentTime = Date.now();  // current date
    console.log(currentTime);

    const olympicTime = new Date(2028, 6, 14).getTime();
    console.log(olympicTime);

    let timer = olympicTime - currentTime; // in millisecond

    const day = Math.floor((timer)/(1000*60*60*24));  // converting millisecond to no. of days
    timer%=1000*60*60*24;

    const hours = Math.floor((timer)/(1000*60*60));  // hours 
    timer%=1000*60*60;

    const minutes = Math.floor((timer)/(1000*60));  // minutes
    timer%=1000*60;

    const seconds = Math.floor((timer)/(1000));  // seconds
    timer%=1000;
    
    result.textContent = `${day} Days ${hours} Hour ${minutes} Minute ${seconds} Second`;
}, 1000);
