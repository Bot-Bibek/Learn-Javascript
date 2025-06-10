var sellingPrice = 199;
var listPrice = 799;

var discountPercent = ((listPrice - sellingPrice) / listPrice) * 100;



displayDiscountPercentage = Math.round(discountPercent)
console.log(`
    Discount percetage is: ${displayDiscountPercentage}% off
    `)


var result = listPrice > sellingPrice;

//typeof return the type of variables
console.log(typeof result)