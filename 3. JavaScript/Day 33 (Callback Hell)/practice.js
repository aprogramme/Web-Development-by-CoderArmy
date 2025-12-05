// callback hell 

const orderDetail = {
    token : 12345,
    food : ["Pizza", "Coke", "Biryani"],
    cost : 700,
    customer : "Aayush",
    customer_location : "Patrakar nagar",
    restaurant_location : "Kankarbagh"
}

function placeOrder(orderDetail, callback) {
    console.log(`${orderDetail.cost} Payment is in the progress`);

    setTimeout(() => {
        console.log("Payment is received and order get placed");
        callback();
    }, 2000);
}

function preparingOrder(orderDetail, callback) {
    console.log(`Your food is preparing ${orderDetail.food}`);

    setTimeout(() => {
        console.log("Your food is ready");
        callback();
    }, 2000);
}

function pickUp(orderDetail, callback) {
    console.log(`Rider on the way to pickup your food from ${orderDetail.restaurant_location}`);

    setTimeout(() => {
        console.log("Rider received your food ");
        callback();
    },2000);
}

function delivery(orderDetail) {
    console.log(`Rider on the way to deliver your food to you at ${orderDetail.customer_location}`);

    setTimeout(() => {
        console.log("Deliver food successfully");
    }, 2000);
}

placeOrder(orderDetail, () => {
    preparingOrder(orderDetail, () => {
        pickUp(orderDetail, () => {
            delivery(orderDetail);
        });
    })
})