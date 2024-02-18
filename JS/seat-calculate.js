function seatCalculation(seat){
    const seatString = document.getElementById('seat-booking-count');
    seatString.innerText =seat;
    // minus total seat
    const remainingSeats = 40 - seat;
    const totalSeatString = document.getElementById('total-seat');
    totalSeatString.innerText = remainingSeats;

}