function calculateTotalFair(serial) {
  const totalPriceString = document.getElementById("total-price");
  let totalFair = 550 * serial;
  totalPriceString.innerText = totalFair;
  
}
