function bookTicket(seat) {
    let serial = 0
    serial++
  const fairSummaryTable = document.getElementById("table-body");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    
                                        <th>${serial}</th>
                                        <td>${seat.innerText}</td>
                                        <td
                                            class="text-[#03071299]">Economy</td>
                                        <td>550</td>
                                    
    `;
   fairSummaryTable.append(tableRow);
}
