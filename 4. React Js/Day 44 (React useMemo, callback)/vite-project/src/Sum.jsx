import React from 'react';

// function Sum() {
    
//     function calculateSum() {
//         let sum = 0;

//         for(let i=1; i<=1000; i++) {
//             sum += i;
//         }
//         return sum;
//     }

//     const total = calculateSum();

//     console.log("Sum rendered"); 

//     return (
//         <> 
//         <h1>This is our Math Library</h1>
//         <h2>Sum: {total}</h2>
//         </>
//     )
// }

// ----------------------------------------------------------
// React memo: to prevent unnecessary re-renders
const Sum = React.memo(({number}) => {
    function calculateSum() {
        let sum = 0;
 
        for(let i=1; i<=number; i++) {
            sum += i;
        }
        return sum;
    }

    const total = calculateSum();

    console.log("Sum rendered"); 

    return (
        <> 
        <h1>This is our Math Library</h1>
        <h2>Sum: {total}</h2>
        </>
    )
})

export default Sum;