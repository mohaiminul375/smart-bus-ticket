function calculateTotalFair(serial) {
  // update total price
  const totalPriceString = document.getElementById("total-price");
  let totalFair = 550 * serial;
  const totalPrice = (totalPriceString.innerText = totalFair);
  calculateCoupon(totalPrice)
  return totalPrice;
}
