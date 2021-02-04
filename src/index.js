// Math.random()
// Math.floor() - rounds numbers down to the nearest integer
// Math.ceil() - round up
// Math.round() - round to nearest integer

const drinksMenu = ['Vodka Tonic', 'White Wine', 'Beer', 'Mocktail']

const randomDrink = drinksMenu[Math.floor(Math.random() * drinksMenu.length)]

console.log(randomDrink)
