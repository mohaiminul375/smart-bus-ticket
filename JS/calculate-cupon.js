function calculateCoupon(totalPrice){
  document.getElementById('input-coupon').addEventListener('keyup',function(event){
    const inputValue = event.target.value;
    if(inputValue === 'NEW15' || inputValue === 'Couple 20'){
            document.getElementById('btn-apply').removeAttribute('disabled')
    } else{
        document.getElementById('btn-apply').setAttribute('disabled',true)
    }
        
  })
  document.getElementById('btn-apply').addEventListener('click',function(){
    console.log('clicked')
    const inputValue = document.getElementById('input-coupon').value
    if(inputValue === 'NEW15'){
        const discount = totalPrice * .15;
        const grandTotal = totalPrice - discount;
        console.log(grandTotal)
        // console.log('my discount is',discount)
        const discountAmountString = document.getElementById('discount-amount')
        discountAmountString.innerText = discount;
        const grandTotalString = document.getElementById('grand-total')
        grandTotalString.innerText = grandTotal;
        console.log(grandTotalString)
    } else if(inputValue === 'Couple 20'){
        const discount = totalPrice * .20;
        const grandTotal = totalPrice - discount;
        // console.log('my discount is',discount)
        const discountAmountString = document.getElementById('discount-amount')
        discountAmountString.innerText = discount;
        const grandTotalString = document.getElementById('grand-total')
        grandTotalString.innerText = grandTotal;
    } 
    // hide input field
  document.getElementById('input-container').style.display= 'none';
  })

}