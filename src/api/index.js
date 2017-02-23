const shoes = [
  { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
  { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
  { id: 'c', brand: 'Reebok', name: 'Classic', price: 1999.99 },
  { id: 'd', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 }
];

export default {
  getShoes: function () {
    return new Promise((resolve) => {
      resolve(shoes);
    })
  }
}