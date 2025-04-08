let groceryList = [];

let newGroceryList = groceryList.push('Apples', 'Milk', 'Bread', 'Bananas', 'Deli Meat');

console.log(groceryList.length);

groceryList[1] = null;
groceryList[4] = null;

console.log(groceryList);

groceryList[5] = ''
groceryList[6] = ''

console.log(groceryList);

groceryList.splice(5, 1, 'Spices');
groceryList.splice(6, 1, 'Juice');

console.log(groceryList);
console.log(groceryList.length);

let shoppingCart = [];

shoppingCart.push('Milk', 'Bread', 'Eggs');

console.log(shoppingCart);

shoppingCart.pop();

console.log(shoppingCart);