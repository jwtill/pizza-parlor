// Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

let pepSaus = new Pizza(["pepperoni", "sausage"], "s"); // expected output 4 + 15 = 19
let superDuper = new Pizza(["peppers", "CHEESE", "ears", "tanKs", "Butter"], "l"); //expected output 8 + 23 = 31

Pizza.prototype.cost = function() {
  let toppingsCheck = this.toppings.map(toppings => toppings.toLowerCase());
  let pizzaCost = toppingsCheck.length * 2;  //calculate topping cost

  if (toppingsCheck.includes("cheese")) { //If cheese is included in the topping list, remove 2 from total
      pizzaCost = pizzaCost - 2; 
  }
  if (this.size === "s") {
    pizzaCost = pizzaCost + 15;
  }
  else if(this.size === "m") {
    pizzaCost = pizzaCost + 19;
  }
  else if(this.size === "l") {
    pizzaCost = pizzaCost + 23;
  }
  else {
    console.log("error");
    return 0;
  }
  console.log("Your pizza costs: $", pizzaCost)
  return pizzaCost;
}

//UI Logic

$(document).ready(function() {
  $("form#order").submit (function() {
    event.preventDefault();
    let toppingsTotal = 0;
    $("input:checkbox").each(function() { //Get a number of total toppings for price
      if (ischecked = $(this).is(":checked")){
        toppingsTotal += 1;
      }
    });
    console.log(toppingsTotal);
    let size = $("#size").val();
    console.log("Size is: ", size);
    // let newOrder = new Pizza(toppings, size);
  });

});






