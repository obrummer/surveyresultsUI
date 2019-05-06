import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { Radar } from 'react-chartjs-2';
import ModalPage from './ModalPage';

const ChartSection2 = ({totalResults, totalAdministrationResults, totalInvestmentsResults, totalMarketingResults, totalSalesResults, totalOperationsResults }) =>  {
        
        const dataRadar = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                  label: 'Admin',
                  backgroundColor: 'rgba(245, 74, 85, 0.5)',
                  data: totalAdministrationResults
                },
                {
                  label: 'Investments',
                  backgroundColor: 'rgba(90, 173, 246, 0.5)',
                  data: totalInvestmentsResults
                },
                {
                  label: 'Marketing',
                  backgroundColor: 'rgba(245, 192, 50, 0.5)',
                  data: totalMarketingResults
                },
                {
                    label: 'Operations',
                    backgroundColor: 'rgba(75, 192, 50, 0.5)',
                    data: totalOperationsResults
                },
                {
                    label: 'Sales',
                    backgroundColor: 'rgba(50, 50, 25, 0.5)',
                    data: totalSalesResults
                },
                {
                    label: 'Total',
                    backgroundColor: 'rgba(150, 245, 50, 0.5)',
                    data: totalResults
                }
              ]
            }


        return (
            <MDBRow className="mb-4">
                <MDBCol md="12" lg="6" className="mb-4">
                    <MDBCard className="mb-4">
                    <MDBCardHeader>Results<ModalPage /></MDBCardHeader>
                    <MDBCardBody>
                        <Radar data={dataRadar}  height={300} options={{responsive: true }} />
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="12" lg="6" className="mb-4">
                    <MDBCard className="mb-4">
                    <MDBCardHeader>Questions<ModalPage /></MDBCardHeader>
                    <MDBCardBody>
                        <p>1. It is safe to try new approaches, to innovate, to be vulnerable, to share my ideas at work.</p>
                        <p>2. When I make a mistake, I am corrected with respect, and the desire to help me improve.</p>
                        <p>3. I have the tools and resources necessary to perform my work to the best of my ability.</p>
                        <p>4. I understand the expectations of me and my performance.</p>
                        <p>5. I trust my team members and colleagues to support my and the company's success.</p>
                        <p>6. I am motivated by, and find meaning in, the company's mission, vision, and values.</p>
                        <p>7. I receive acknowledgement and appreciation at work.</p>
                        <p>8. I have a career development path that the company supports.</p>
                        <p>9. I feel I matter to the company. I am making a difference here.</p>
                        <p>10. Would you refer your friends to work at your company?</p>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }


export default ChartSection2;

