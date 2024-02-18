function calculateTotalFair(serial) {
  // update total price
  const totalPriceString = document.getElementById("total-price");
  let totalFair = 550 * serial;
  const totalPrice = (totalPriceString.innerText = totalFair);
    // console.log(totalPrice,'total price form')
    const grandTotalString = document.getElementById('grand-total')
    grandTotalString.innerText = totalPrice;
  calculateCoupon(totalPrice,serial)
  if(serial !== 0){
    document.getElementById('btn-next').removeAttribute('disabled')
  }
}
