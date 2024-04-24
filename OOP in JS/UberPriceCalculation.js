class UberPriceCalculation {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }


priceCalculation(travelledkm, travelledminutes) {
    const distanceCost = travelledkm * this.costPerKm;
    const timeCost = travelledminutes * this.costPerMinute;
    const totalPrice = this.baseFare + distanceCost + timeCost;
    return totalPrice;
}
}  
const uberPriceCalculation = new UberPriceCalculation(10,5,1)

console.log(uberPriceCalculation);
console.log("Total Price = ",uberPriceCalculation.priceCalculation(40,30))