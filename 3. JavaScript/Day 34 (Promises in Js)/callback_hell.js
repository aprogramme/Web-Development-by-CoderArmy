// callback hell

// const orderDetail = {
//     orderId : 79283,
//     food : ["Pizza", "Biryani", "Coke"],
//     cost : 660,
//     customer_name : "Aayush",
//     customer_location : "Dwarka",
//     restaurant_location : "Delhi"
// }

// function placedOrder(orderDetail, callback) {
//     console.log(`${orderDetail.cost} payment is in the progress`);

//     setTimeout(() => {
//         console.log("Payment is received and order get placed");
//         orderDetail.status = true;
//         callback(orderDetail);
//     }, 3000);
// }

// function preparingOrder(orderDetail, callback) {
//     console.log(`Start preparing your ${orderDetail.food}`);

//     setTimeout(() => {
//         console.log("Your order is now prepared");
//         orderDetail.token = 123;
//         callback(orderDetail);
//     }, 3000);
// }

// function pickupOrder(orderDetail, callback) {
//     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`);

//     setTimeout(() => {
//         console.log("I have picked up the order");
//         orderDetail.received = true;
//         callback(orderDetail);
//     }, 3000);
// }

// function deliverOrder(orderDetail ,callback) {
//     console.log(`I am on my way to deliver the order to ${orderDetail.customer_location}`);

//     setTimeout(() => {
//         console.log("Order delivered successfully");
//         orderDetail.deliveryStatus = true;
//         callback();
//     }, 3000);
// }

// function feedback() {
//     console.log("Customer rating the order");

//     setTimeout(() => {
//         console.log("Customer rated 5 star");
//     }, 3000);
// }

// // callback hell
// placedOrder(orderDetail, (orderDetail) => {
//     preparingOrder(orderDetail, (orderDetail) => {
//         pickupOrder(orderDetail, (orderDetail) => {
//             deliverOrder(orderDetail, () => {
//                 feedback();
//             });
//         });
//     });
// });

// ------------------------------------------------------
// promises

const orderDetail = {
    orderId : 79283,
    food : ["Pizza", "Biryani", "Coke"],
    cost : 660,
    customer_name : "Aayush",
    customer_location : "Dwarka",
    restaurant_location : "Delhi"
}

function placedOrder(orderDetail) {
    console.log(`${orderDetail.cost} payment is in progress`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.1) {
                console.log("Payment is received and order get placed");
                orderDetail.status = true;
                resolve(orderDetail);
            }
            else {
                reject("Payment is failed");
            }
        }, 3000);
    })

}

function preparingOrder(orderDetail) {
    console.log(`Start preparing your ${orderDetail.food}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.05) {
                console.log("Your order is now prepared");
                orderDetail.token = 123;
                resolve(orderDetail);
            }
            else {
                reject("Food item is not present at resaturant");
            }
        }, 3000);
    })
}

function pickupOrder(orderDetail) {
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.05) {
                console.log("I have picked up the order");
                orderDetail.received = true;
                resolve(orderDetail);
            }
            else {
                reject("Delivery boy unable to reach restaurant");
            }
        }, 3000);
    })
}

function deliverOrder(orderDetail) {
    console.log(`I am on my way to deliver the order to ${orderDetail.customer_location}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.2) {
                console.log("Order delivered successfully on time");
                orderDetail.deliveryStatus = true;
                resolve(orderDetail);
            }
            else {
                reject("Order didn't delivered on time");
            }
        }, 3000);
    })
}

function feedback(orderDetail) {
    console.log("Customer rating the order");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.2) {
                console.log("Customer rated 5 star");
                resolve(orderDetail);
            }
            else {
                reject("Customer didn't give feedback")
            }
        }, 3000);
    })
}

// placedOrder(orderDetail);
// preparingOrder(orderDetail)
// pickupOrder(orderDetail);
// deliverOrder(orderDetail);
// feedback();

placedOrder(orderDetail)
.then((orderDetail) => {
    return preparingOrder(orderDetail);
})
.then((orderDetail) => {
    return pickupOrder(orderDetail);
})
.then((orderDetail) => {
    return deliverOrder(orderDetail);
})
.then((orderDetail) => {
    return feedback(orderDetail);
})
.then (() => {
    console.log("Details of your order : ");
    console.log(orderDetail);
})
.catch((error) => {
    console.log("Error: ", error);
})
.finally(() => {
    console.log("I am doing cleanup");
})

