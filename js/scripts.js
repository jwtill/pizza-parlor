// Business Logic
function Pizza(toppings, size) {//Pizza constructor with toppings, size, and cost properties
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

//cost method that determines cost 
Pizza.prototype.pieTotal = function() {
  let toppingsCheck = this.toppings.map(toppings => toppings.toLowerCase());
  let pizzaCost = toppingsCheck.length * 2;  

  if (toppingsCheck.includes("cheese")) { 
      pizzaCost = pizzaCost - 2; 
  }
  if (this.size === "small") {
    pizzaCost = pizzaCost + 15;
  }
  else if(this.size === "medium") {
    pizzaCost = pizzaCost + 19;
  }
  else if(this.size === "large") {
    pizzaCost = pizzaCost + 23;
  }
  else {
    return 0;
  }
  return pizzaCost;
}

//UI Logic

$(document).ready(function() {
  $("form#order").submit (function() {
    event.preventDefault();
    $("#pizza-size").html("");
    $("#pizza-toppings").html("");

    //get toppings from check boxes
    let toppingsTotal = [];
    $("input:checkbox").each(function() { 
      if ($(this).is(":checked")){
        toppingsTotal.push(this.value);
      }
    });
    //get size from text input
    const size = $("#size").val();

    //create new pizza with those inputs
    const newOrder = new Pizza(toppingsTotal, size);
    newOrder.cost = newOrder.pieTotal();

    //create variable to hold the number of toppings
    const numToppings = newOrder.toppings.length;
    $("#total-msg").show();
    
    //Syntax for building sentence in total message
    if (numToppings <= 1) {
      $("#pizza-toppings").append(newOrder.toppings); 
    }
    else {
      for (let i = 0; i < numToppings; i++) { 
        if (i === numToppings - 1 ) { 
          $("#pizza-toppings").append(newOrder.toppings[i]); 
        }
        else if (i === numToppings - 2) { 
          $("#pizza-toppings").append(newOrder.toppings[i] + " and "); 
        }
        else {
          $("#pizza-toppings").append(newOrder.toppings[i] + " , "); 
        }
      }
    }
    $("#pizza-size").html(newOrder.size); 
    $("#pizza-total").html("$" + newOrder.cost + ".");
    if (newOrder.cost === 0) {
      $("#total-msg").text("Error, please try again.");
    }
  });
});






