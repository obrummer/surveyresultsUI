import React, { Component } from 'react';
import { MDBContainer, MDBCard, MDBCardHeader } from 'mdbreact';
import { Line } from 'react-chartjs-2';
import ModalPage from './ModalPage';

const IndexSection = ({ totalResultsYear }) => {
    
        const dataLine = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
              {
                label: "2018",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(245, 74, 85, 0.4)",
                borderColor: "rgba(245, 74, 85, 1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(245, 74, 85, 1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [100, 90, 80, 110, 87, 110, 113, 120,110,90,91,102]
              },
              {
                label: "2019",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: totalResultsYear
              }
            ]
          } 
        
return (
    <MDBContainer>
      <MDBCard>
             <MDBCardHeader><h5 className="mt-5">Index total<ModalPage /></h5></MDBCardHeader>
      <Line data={dataLine} options={{ responsive: true }} />
      </MDBCard>
    </MDBContainer>
  )
}


export default IndexSection;

