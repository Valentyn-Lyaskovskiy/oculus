'use strict';
// console.log("" || 2);
// let a = 12;
// let b = 120;

// a > b && console.log("a is > b");
// a < b && console.log("a is < b");

const menu = ['Borshch', 'Varenyky', 'Salo', 'Pizza'];

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1}. ${item} `);
// }

const menu_1 = [
  {
    starter: 20,
    desser: 12,
    soup: null,
    cocktails: {
      classical: 45,
      signature: 10,
    },
  },
  22,
];

const menu_2 = {
  starter: 20,
  dessert: 12,
  soup: 5,
  cocktails: {
    classical: 45,
    signature: 10,
  },
  id: 22,
  price: [1, 2, 30],
};

const entries = Object.entries(menu_2)
console.log(entries)

// for (const [i, el] of menu_2.price.entries()) console.log(`${i + 1}: ${el}`);

// console.log(menu_1[0]?.soup ?? 'N/A');
// const prop = Object.keys(menu_2);
// const prop1 = Object.values(menu_2);
// for (let item of prop) {
//   console.log(item)
// }
// console.log(prop);
// console.log(prop1);
