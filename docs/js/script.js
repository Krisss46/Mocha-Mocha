// enables order added popup
function order(price, product) {
 console.log("Order function :: price: ", price, ", product: ", product);

 const div = document.createElement("div");
 div.className = "notification";

 const newMsg = document.createElement("p");
 newMsg.innerHTML = `${product} / ${price}$ added to cart`;

 div.appendChild(newMsg);
 document.body.appendChild(div);

 setTimeout(() => {
  div.style.opacity = "0";
 }, 1200);

 div.addEventListener("transitionend", () => {
   div.remove();
 });

 addOrderItem(price, product)
}

// Updates the adding/removing event for order list
var totalPrice = 0
var index = 0;

function addOrderItem(price, product){
  console.log("adding item to order...")
  const orderList = document.getElementById("order_list")
  const container = document.getElementById("order_list_container")

  const order = document.createElement("div")
  order.setAttribute("class", "list_item")
  order.innerHTML = `${product} / ${price}$ `
  order.id = index
  
  const btn = document.createElement("button")
  btn.innerHTML = "Remove"
  btn.setAttribute(`onclick`, `rmOrderItem(${index}, ${price})`)

  order.appendChild(btn)
  container.appendChild(order)

  index++
  totalPrice += price
  document.getElementById("paymentBtn").innerHTML = totalPrice + "$"

  document.getElementById("order_list").style.display = "block"
}

function rmOrderItem(index, price){
  console.log("removing item from order...")
  const order = document.getElementById(String(index))
  order.remove()

  totalPrice -= price
  document.getElementById("paymentBtn").innerHTML = totalPrice + "$"

  const childrenWithClass = parentElement.querySelectorAll('.your-class')
  const count = childrenWithClass.length

  if (count == 0){
    document.getElementById("order_list").style.display = "none"
  }
}