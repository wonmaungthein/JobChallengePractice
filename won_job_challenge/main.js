var pea = { name: "pea", unit: "bag", unitPriceDollar: 0.95 };
var egg = { name: "egg", unit: "dozen", unitPriceDollar: 2.1 };
var milk = { name: "milk", unit: "bottle", unitPriceDollar: 1.3 };
var bean = { name: "bean", unit: "can", unitPriceDollar: 0.73 };

var basket = [];

function addPea() {
  basket.push(pea);
  console.log("Pea is added");
  console.log(basket.length);
  console.log(basket);
  updateBasket();
}

function addEgg() {
  basket.push(egg);
  console.log("Egg is added");
  console.log(basket.length);
  updateBasket();
}

function addMilk() {
  basket.push(milk);
  console.log("Milk is added");
  console.log(basket.length);
  updateBasket();
}

function addBean() {
  basket.push(bean);
  console.log("Bean is added");
  console.log(basket.length);
  updateBasket();
}

function cancelLastItem() {
  basket.pop();
  console.log("Deleted last item");
  console.log(basket.length);
  updateBasket();
}

function emptyBasket() {
  basket.length = 0;
  console.log(basket.length);
  updateBasket();
}

function getSum(total, num) {
  return total + num;
}

const checkout = () => {
  const itemPrice = basket.map(basketitem => basketitem.unitPriceDollar);
  const totalPrice = itemPrice.reduce(getSum).toFixed(2);
  console.log(totalPrice);

  document.getElementById("price").innerHTML = `Total Price: ${totalPrice}`;
};

const updateBasket = () => {
  const itemName = basket.map(basketitem => basketitem.name);
  document.getElementById("basket").innerHTML = `Items in Basket: ${itemName}`;
  console.log("test" + itemName);
};
