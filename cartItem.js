class CartItem {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.shoppingCart = [];
  }
  addItems(item) {
    this.shoppingCart.push(item);
    return this.shoppingCart;
  }

  totalPrice() {
    let totalSum = 0;
    let price = this.shoppingCart.map((item) => item.price * item.quantity);

    for (let i = 0; i < price.length; i++) {
      totalSum += price[i];
    }
    return totalSum;
  }

  removeItem(name) {
    return this.shoppingCart
      .filter((item) => item.name !== name)
      .map((item) => item);
  }

  updateItem(name, quantity) {
    let itemToUpdate = this.shoppingCart.find((item) => item.name === name);
    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
    }
    return this.shoppingCart;
  }

  clearList() {
    this.shoppingCart.length = 0;
  }

  applyCoupon(code){
    let priceWithDiscount;
    if(code === 'SAVE10'){
        priceWithDiscount = this.totalPrice()*10/100;
    }else if(code === 'SAVE20'){
            priceWithDiscount = this.totalPrice()*20/100;
        }else if(code === 'SAVE50'){
            priceWithDiscount = this.totalPrice()*50/100;
    }else{
        this.totalPrice()*1;
    }
    return priceWithDiscount;
  }
}

let a = new CartItem("Bread", 2, 0.8);
let b = new CartItem("milk", 1, 2);
let shoppingCart = new ShoppingCart();
console.log(shoppingCart.addItems(b));
console.log(shoppingCart.addItems(a));
console.log(shoppingCart.totalPrice());
// console.log(shoppingCart.clearList());
console.log(shoppingCart.updateItem("milk", 8));
console.log(shoppingCart.totalPrice());
console.log(shoppingCart.applyCoupon('SAVE10'))
