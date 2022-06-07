const cart_item = {
  value1: { id: 1, itemName: "iphone", cost: "30000" },
  value2: { id: 1, itemName: "microsoft mobile", cost: "6000" },
  value3: { id: 1, itemName: "android mobile", cost: "10000" },
};

// /-----------array iteration------------
// let budgetMobile = cart_item.map((value) => {
//   return cart_item.object1.itemName;
// });
// console.log(budgetMobile);

// -----------------object iteration----------

let allPhones = Object.keys(cart_item).map((key) => {
  console.log(cart_item[key].itemName);
});
