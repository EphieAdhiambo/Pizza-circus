function getSize() {
  var size = document.getElementById("size").value;
  return parseInt(size);
}
function getFlavour() {
  var flavour= document.getElementById("flavour").value;
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

/* function for total amount */
function totalAmount() {
  var totals = (getSize() +getFlavour() + getCrust() + getToppings()) * getQuantity();
  alert(
    "You have Ordered " +
    getQuantity("") +
    " pizza," +
    "" +
    " amounting to ksh. " +
    totals +
    "" +
    " Thanks for your order welcome again."
  );

  // variable to get the location of the customer
  var location = prompt("If you want your pizza to be delivered to you please enter your location and if not cancel.");
  if (location !== "") {
    alert("You order will be delivered shortly.Delivery fee is 100/= and incase you didn,t want it delivered please come for your order.");
  }
}
