// Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  return [this.toppings, this.size];
}


