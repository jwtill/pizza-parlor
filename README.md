# _Pizza Parlor_

#### By _**Josh Tillinghast**_

#### _An application that takes user input such as pizza toppings and size and outputs the cost for that pizza_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_

## Description
A simple website for selecting different sized pizzas with different toppings. After making prefered selections, the user is presented with the price of the given pizza with that amount of toppings.

_**_

## Setup/Installation Requirements

* _Simply download all files and folders, then open up index.html on your favorite browser. Then fill out what size pizza and what toppings you would like, press submit, and a price will print on the screen._




## Known Bugs

* _None at this time_


## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _01/28/2022_ _Joshua Tillinghast_
#### Specs:
---------------------------------------------------------------------------------------------
### Describe: Pizza()

# Test: "It should return a Pizza object with two properties for toppings  size, and cost"
Code: const myPizza = new Pizza(["pepperoni", "sausage"], "small");
Expected Output: Pizza { toppings: ["pepperoni", "sausage"], size: "small", cost:  }

### Describe: Pizza.prototype.cost

# Test: "It should return the values of the current object"
Code: new Pizza(["pepperoni", "sausage"], "small")
      newPizza.cost()
Expected Output: Pizza { toppings: ["pepperoni", "sausage"], size: "small" }

# Test: "It should return $2 for each topping selected"
Code: new Pizza(["pepperoni", "sausage"], "small")
      newPizza.cost()
Expected Output: 0

# Test: "It should return no additional cost if cheese as a topping is selected"
Code: new Pizza(cheese, "small")
      newPizza.cost()
Expected Output: 0

# Test: "It should return $15 for small size"
Code: new Pizza(cheese, "s")
      newPizza.cost()
Expected Output: $15

# Test: "It should return $19 for medium size"
Code: new Pizza(cheese, "m")
      newPizza.cost()
Expected Output: $19

# Test: "It should return $23 for large size"
Code: new Pizza(cheese, "l")
      newPizza.cost()
Expected Output: $23





---------------------------------------------------------------------------







