let serial = 0;
const bookedSeat = [];
function bookTicket(seat) {
  serial++
  console.log(serial);
  if(bookedSeat.includes(seat.innerText)){
    console.log(seat.innerText)
    return;
  }
  seat.style.backgroundColor = '#1DD100'
  seat.style.color = 'white'
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
console.log(bookedSeat)
  
}
