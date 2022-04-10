import React from 'react'
import Table from 'react-bootstrap/Table'

function ViewEvent() {
  return (
    <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sr.no</th>
      <th>Event</th>
      <th>Venue</th>
      <th>Date</th>
      <th>Time</th>
      <th>No of guests</th>
      <th>Host</th>
      <th>Contact details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Wedding : Mr & Mrs.Kapoor</td>
      <td>Banquet Hall 1</td>
      <td>05/04/2022</td>
      <td>7:00pm-10:00pm</td>
      <td>100</td>
      <td>Mr.Rohan Kapoor</td>
      <td>8686792211</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Birthday : Mrs.Suhana Patel</td>
      <td>Banquet Hall 1</td>
      <td>06/04/2022</td>
      <td>4:00pm-7:00pm</td>
      <td>50</td>
      <td>Mr.Rohan Patel</td>
      <td>8987755555</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Conference : Birla associates</td>
      <td>Conference room 2</td>
      <td>07/04/2022</td>
      <td>5:00pm-6:00pm</td>
      <td>500</td>
      <td>Mr.Amit Mehra</td>
      <td>9923421536</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Seminar: Revature technologies</td>
      <td>Seminar Hall 1</td>
      <td>08/04/2022</td>
      <td>2:00pm-4:00pm</td>
      <td>150</td>
      <td>Mr.Aman Singhania</td>
      <td>8987722675</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Birthday : Mrs.Suhana Patel</td>
      <td>Banquet Hall 1</td>
      <td>06/04/2022</td>
      <td>4:00pm-7:00pm</td>
      <td>250</td>
      <td>Mr.Rohan Patel</td>
      <td>8987755555</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Office party: TCS</td>
      <td>Banquet Hall 2</td>
      <td>10/04/2022</td>
      <td>3:00pm-8:00pm</td>
      <td>500</td>
      <td>Mrs.Priya Ahuja</td>
      <td>8169176923</td>
    </tr>
   
  </tbody>
</Table>


    </div>
  )
}

export default ViewEvent