function calculateTotalFair(serial) {
  // update total price
  const totalPriceString = document.getElementById("total-price");
  let totalFair = 550 * serial;
  const totalPrice = (totalPriceString.innerText = totalFair);
    // console.log(totalPrice,'total price form')
  calculateCoupon(totalPrice)
//   return totalPrice;
}
