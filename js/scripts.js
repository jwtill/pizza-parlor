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
    $("#pizza-size").html("");
    $("#pizza-toppings").html("");
    let toppingsTotal = [];
    $("input:checkbox").each(function() { 
      if (ischecked = $(this).is(":checked")){
        toppingsTotal.push(this.value);
      }
    });
    let size = $("#size").val();
    let newOrder = new Pizza(toppingsTotal, size);
    $("#total-msg").show();
    $("#pizza-size").html(newOrder.size); //print the pizza size to the html

    

    let numToppings = newOrder.toppings.length;
    // console.log(numToppings);

    if (numToppings > 1) {  
      for (let i = 0; i < numToppings; i++) {
        if (i = numToppings - 1) {
          $("#pizza-toppings").append(newOrder.toppings[i]);
        }
      // $("#pizza-toppings").append(newOrder.toppings[i], " ");
      }
    }
    
    else {
          $("#pizza-toppings").html(newOrder.toppings); //if there's just one topping, just print that out
    }
    
    
    // if (numToppings > 1) { //if there's more than one topping
    //   for (let i = 0; i < numToppings; i++) { //loop through toppings array
    //     $("#pizza-toppings").append(newOrder.toppings[i] + ",");//print to html starting at [0], followed by a comma
    //       if (i = numToppings - 2) { //if you get to the second to last item in the array
    //         $("#pizza-toppings").append(" " + newOrder.toppings[i]);//just print the topping 
    //       }
    //       else if (i = numToppings - 1) { //when you get to the last item in the toppings array
    //       $("#pizza-toppings").append(" and " + newOrder.toppings[i]);//print and followed by the last item
    //       }
    //   }
    // }
    // else {
    //   $("#pizza-toppings").html(newOrder.toppings[0]); //if there's just one topping, just print that out
    // }
    $("#pizza-total").html("$" + newOrder.cost() + ".");
  });
});






