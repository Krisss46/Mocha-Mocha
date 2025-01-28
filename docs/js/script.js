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
}


function addOrderList(){

}