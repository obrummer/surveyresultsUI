import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBCardHeader } from 'mdbreact';
import Test from './Test'
import BodyTable from './BodyTable';
import ModalPage from './ModalPage';

const TableSection = ({ totalResults, totalAdministrationResults, totalInvestmentsResults, totalMarketingResults, totalSalesResults, totalOperationsResults }) => {
console.log(totalResults)
console.log(totalAdministrationResults)

  return (
    <MDBRow className="mb-4">
      <MDBCol md="12">
        <MDBCard>
          <MDBCardHeader>Results<ModalPage /></MDBCardHeader>
          <MDBCardBody>
            <MDBTable hover>
              <MDBTableHead color="blue-grey lighten-4">
                <tr>
                  <th>#</th>
                  <th>Administration</th>
                  <th>Investments</th>
                  <th>Marketing</th>
                  <th>Operations</th>
                  <th>Sales</th>
                  <th>Total</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>1</td>
                  <td>{totalAdministrationResults[0]}</td>
                  <td>{totalInvestmentsResults[0]}</td>
                  <td>{totalMarketingResults[0]}</td>
                  <td>{totalOperationsResults[0]}</td>
                  <td>{totalSalesResults[0]}</td>
                  <td>{totalResults[0]}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{totalAdministrationResults[1]}</td>
                  <td>{totalInvestmentsResults[1]}</td>
                  <td>{totalMarketingResults[1]}</td>
                  <td>{totalOperationsResults[1]}</td>
                  <td>{totalSalesResults[1]}</td>
                  <td>{totalResults[1]}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{totalAdministrationResults[2]}</td>
                  <td>{totalInvestmentsResults[2]}</td>
                  <td>{totalMarketingResults[2]}</td>
                  <td>{totalOperationsResults[2]}</td>
                  <td>{totalSalesResults[2]}</td>
                  <td>{totalResults[2]}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>{totalAdministrationResults[3]}</td>
                  <td>{totalInvestmentsResults[3]}</td>
                  <td>{totalMarketingResults[3]}</td>
                  <td>{totalOperationsResults[3]}</td>
                  <td>{totalSalesResults[3]}</td>
                  <td>{totalResults[3]}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>{totalAdministrationResults[4]}</td>
                  <td>{totalInvestmentsResults[4]}</td>
                  <td>{totalMarketingResults[4]}</td>
                  <td>{totalOperationsResults[4]}</td>
                  <td>{totalSalesResults[4]}</td>
                  <td>{totalResults[4]}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>{totalAdministrationResults[5]}</td>
                  <td>{totalInvestmentsResults[5]}</td>
                  <td>{totalMarketingResults[5]}</td>
                  <td>{totalOperationsResults[5]}</td>
                  <td>{totalSalesResults[5]}</td>
                  <td>{totalResults[5]}</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>{totalAdministrationResults[6]}</td>
                  <td>{totalInvestmentsResults[6]}</td>
                  <td>{totalMarketingResults[6]}</td>
                  <td>{totalOperationsResults[6]}</td>
                  <td>{totalSalesResults[6]}</td>
                  <td>{totalResults[6]}</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>{totalAdministrationResults[7]}</td>
                  <td>{totalInvestmentsResults[7]}</td>
                  <td>{totalMarketingResults[7]}</td>
                  <td>{totalOperationsResults[7]}</td>
                  <td>{totalSalesResults[7]}</td>
                  <td>{totalResults[7]}</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>{totalAdministrationResults[8]}</td>
                  <td>{totalInvestmentsResults[8]}</td>
                  <td>{totalMarketingResults[8]}</td>
                  <td>{totalOperationsResults[8]}</td>
                  <td>{totalSalesResults[8]}</td>
                  <td>{totalResults[8]}</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>{totalAdministrationResults[9]}</td>
                  <td>{totalInvestmentsResults[9]}</td>
                  <td>{totalMarketingResults[9]}</td>
                  <td>{totalOperationsResults[9]}</td>
                  <td>{totalSalesResults[9]}</td>
                  <td>{totalResults[9]}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default TableSection;

