// Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  const toppings = this.toppings.length * 2;
  return toppings;
  return [this.toppings, this.size];
}

let pepSaus = new Pizza(["pepperoni", "sausage"], "small");

let superDuper = new Pizza(["dogs", "ears", "tanks", "butter"], "small");