let serial = 0;
const bookedSeat = [];

function bookTicket(seat) {
  
  if(bookedSeat.includes(seat.innerText)){
    console.log(seat.innerText)
    return;
  }else if(serial === 4){
    window.alert("You can't book more than 4 ticket");
    return;
  }
  serial++
  seat.style.backgroundColor = '#1DD100'
  seat.style.color = 'white'
  // let seatsBookingCount = document.getElementById('seat-booking-count').innerText;
  // let bookingCount = parseInt(seatsBookingCount)
  const fairSummaryTable = document.getElementById("table-body");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    
    <th>${serial}</th>
     <td>${seat.innerText}</td>
    <td  class="text-[#03071299]">Economy</td>
   <td>550</td>
                                    
    `;
  fairSummaryTable.append(tableRow);
  
  
  bookedSeat.push(seat.innerText);
  
}
