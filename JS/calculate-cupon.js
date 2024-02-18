function calculateCoupon(totalPrice){
  document.getElementById('input-coupon').addEventListener('keyup',function(event){
    const inputValue = event.target.value;
    if(inputValue === 'NEW15' || inputValue === 'Couple 20'){
            document.getElementById('btn-apply').removeAttribute('disabled')
    } else{
        document.getElementById('btn-apply').setAttribute('disabled',true)
    }
        //  calculate discount
    // document.getElementById('btn-apply').addEventListener('click',function(){
    //     if(inputValue === 'NEW15'){
    //         console.log(totalPrice)
    //         const discount = totalPrice * .15;
    //         console.log(discount)
    //         const grandTotal = totalPrice - discount;
    //         const grandTotalString = document.getElementById('grand-total');
    //         // grandTotalString.innerText = grandTotal;
    //     }
    //   })
  })
  document.getElementById('btn-apply').addEventListener('click',function(){
    const inputValue = document.getElementById('input-coupon').value
    if(inputValue === 'NEW15'){
        const discount = totalPrice * .15;
        console.log(discount)
    }
  })

}