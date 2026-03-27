function calculateTax(amount){
    let taxRate = 0.1 * amount
    return amount * taxRate
}
console.log (calculateTax(100));