// zomato application

// 1. ---------------------------------------------------
// function placedOrder() {
//     console.log("Payment is in the progress");

//     setTimeout(() => {
//         console.log("Payment is received and order get placed");
//     }, 3000);
// }

// function preparingOrder() {
//     console.log("Your food preparation started");

//     setTimeout(() => {
//         console.log("Your order is now prepared");
//     }, 3000);
// }

// placedOrder();
// // preparingOrder();  // wrong 


// 2. ---------------------------------------------------
// function placedOrder(callback) {
//     console.log("Payment is in the progress");

//     setTimeout(() => {
//         console.log("Payment is received and order get placed");
//         callback();
//     }, 3000);
// }

// function preparingOrder(callback) {
//     console.log("Your food preparation started");

//     setTimeout(() => {
//         console.log("Your order is now prepared");
//         callback();
//     }, 3000);
// }

// placedOrder(preparingOrder);

// function pickupOrder() {
//     console.log("Delivery boy is on way to pickup order");

//     setTimeout(() => {
//         console.log("I have picked up the order");
//     }, 3000);
// }

// // placedOrder(preparingOrder(pickupOrder)); // wrong


// 3. ---------------------------------------------------

const orderDetail = {
    orderId : 79283,
    food : ["Pizza", "Biryani", "Coke"],
    cost : 660,
    customer_name : "Aayush",
    customer_location : "Dwarka",
    restaurant_location : "Delhi"
}

function placedOrder(orderDetail, callback) {
    console.log(`${orderDetail.cost} payment is in the progress`);

    setTimeout(() => {
        console.log("Payment is received and order get placed");
        orderDetail.status = true;
        callback(orderDetail);
    }, 3000);
}

function preparingOrder(orderDetail, callback) {
    console.log(`Start preparing your ${orderDetail.food}`);

    setTimeout(() => {
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        callback(orderDetail);
    }, 3000);
}

function pickupOrder(orderDetail, callback) {
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`);

    setTimeout(() => {
        console.log("I have picked up the order");
        orderDetail.received = true;
        callback(orderDetail);
    }, 3000);
}

function deliverOrder(orderDetail ,callback) {
    console.log(`I am on my way to deliver the order to ${orderDetail.customer_location}`);

    setTimeout(() => {
        console.log("Order delivered successfully");
        orderDetail.deliveryStatus = true;
        callback();
    }, 3000);
}

function feedback() {
    console.log("Customer rating the order");

    setTimeout(() => {
        console.log("Customer rated 5 star");
    }, 3000);
}

// callback hell
placedOrder(orderDetail, (orderDetail) => {
    preparingOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail, (orderDetail) => {
            deliverOrder(orderDetail, () => {
                feedback();
            });
        });
    });
});
