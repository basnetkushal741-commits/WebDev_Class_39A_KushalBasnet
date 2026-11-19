let amount = 100;
let finalPrice;

if (amount >= 100) {
    finalPrice = amount - (amount * 0.20);
} else if (amount >= 50) {
    finalPrice = amount - (amount * 0.10);
} else {
    finalPrice = amount;
}

console.log("Final Price:", finalPrice);