function getSize() {
  var size = document.getElementById("size").value;
  return parseInt(size);
}
function getFlavour() {
  var flavour = document.getElementById("flavour").value;
  return parseInt(flavour);
}
function getCrust() {
  var crust = document.getElementById("crust").value;
  return parseInt(crust);
}
function getToppings() {
  var cheese = document.getElementById("toppings").value;
  return parseInt(toppings);
}
function getQuantity() {
  var number = document.getElementById("quantity").value;
  return parseInt(quantity);
}
function totalAmount() {
  var totals = (getSize() + getFlavour() + getCrust() + getToppings()) * getQuantity();
  alert(
    "We have recieved your order." + "Total price is 2300. " +
    "Thank you for making an order!"
  );
  
  // if (totals !==" "){
  //   alert("select a choice in every field below!")
  // }
  var location = prompt("For Delivery, please put in your location");
  if (location !== "") {
    alert("Delivery Fee is 200.Your Order will be Delivered within 20-30mins");
  }
}
