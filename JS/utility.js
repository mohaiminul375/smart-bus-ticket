const seats = document.getElementsByClassName('seat');
// console.log(seats)
function getSeat(seats){
    for(const seat of seats){
      seat.addEventListener('click',function(){
      bookTicket(seat);
      
      }) 
    }
}
getSeat(seats)