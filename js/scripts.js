// Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

let pepSaus = new Pizza(["pepperoni", "sausage"], "small"); // expected output 4 + 15
let superDuper = new Pizza(["peppers", "CHEESE", "ears", "tanKs", "Butter"], "small"); //expected output 8 + 15

Pizza.prototype.cost = function() {
  let toppingsCheck = this.toppings.map(toppings => toppings.toLowerCase());
  
  if (toppingsCheck.includes("cheese")) {
    toppingsCheck.shift();
  }
  const toppingCost = toppingsCheck.length * 2;  
  console.log("Cost of Toppings: ", toppingCost)
  return toppingCost;
  
}
  // if (this.toppings === "cheese") {
  //   this.toppings = this.toppings.unShift;

  //   console.log("length afterward:", toppings.length);
  // }
  

