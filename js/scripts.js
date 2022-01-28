// Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
  let toppingsCheck = this.toppings.map(toppings => toppings.toLowerCase());
  let pizzaCost = toppingsCheck.length * 2;  //calculate topping cost

  if (toppingsCheck.includes("cheese")) { //If cheese is included in the topping list, remove 2 from total
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
    console.log("error");
    return 0;
  }
  return pizzaCost;
}

//UI Logic

$(document).ready(function() {
  $("form#order").submit (function() {
    event.preventDefault();
    let toppingsTotal = [];
    $("input:checkbox").each(function() { 
      if (ischecked = $(this).is(":checked")){
        toppingsTotal.push(this.value);
      }
    });
    let size = $("#size").val();
    let newOrder = new Pizza(toppingsTotal, size);
    $("#total-msg").show();
    $("#pizza-size").html(newOrder.size);
    if (newOrder.toppings.length > 1) {
      $("#pizza-toppings").html(newOrder.toppings + "," + " ");
    }
    else {
      $("#pizza-toppings").html(newOrder.toppings);
    }
    $("#pizza-total").html("$" + newOrder.cost());
  });
});






