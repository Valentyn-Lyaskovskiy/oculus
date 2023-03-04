'use strict';
// console.log("" || 2);
// let a = 12;
// let b = 120;

// a > b && console.log("a is > b");
// a < b && console.log("a is < b");

const menu = ['Borshch', 'Varenyky', 'Salo', 'Pizza'];
for (const [i, item] of menu.entries()) {
  console.log(`${i + 1}. ${item} `);
}
