import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBCardHeader } from 'mdbreact';
import Test from './Components/Test'

const TableSection = ({results}) => {
  
  const newResults = [...results]
  console.log(newResults)

  const [totalResults] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalAdministrationResults] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalInvestmentsResults] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalOperationsResults ] = useState([0,0,0,0,0,0,0,0,0,0])
  const [totalSalesResults] = useState([0,0,0,0,0,0,0,0,0,0])

  const administrationResults = results.filter(function(administration) {
    return administration.question1 === 'Administration';
  });
  const totalAdminQuestion11 = () => {
    const question11sum = administrationResults.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / administrationResults.length * 100)
  }
  const investmentsResults = results.filter(function(investments) {
    return investments.question1 === 'Investments';
  });
  const totalInvestmentsQuestion11 = () => {
    const question11sum = investmentsResults.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / investmentsResults.length * 100)
  }
  const marketingResults = results.filter(function(marketing) {
    return marketing.question1 === 'Marketing';
  });
  const operationsResults = results.filter(function(operations) {
    return operations.question1 === 'Operations';
  });
  const salesResults = results.filter(function(sales) {
    return sales.question1 === 'Sales';
  });

  const totalQuestion11 = () => {
    const question11sum = results.reduce( (acc, val) => {
      return acc + val.question11   
    },0) 
    return Math.floor(question11sum / results.length * 100)
  }
  totalResults.splice(0, 1, totalQuestion11())
  console.log(totalResults)
  const totalQuestion12 = () => {
    const question12sum = results.reduce( (acc, val) => {
      return acc + val.question12   
    },0) 
    return Math.floor(question12sum / results.length * 100)
  }
  const totalQuestion13 = () => {
    const question13sum = results.reduce( (acc, val) => {
      return acc + val.question13   
    },0) 
    return Math.floor(question13sum / results.length * 100)
  }
  const totalQuestion14 = () => {
    const question14sum = results.reduce( (acc, val) => {
      return acc + val.question14   
    },0) 
    return Math.floor(question14sum / results.length * 100)
  }
  const totalQuestion15 = () => {
    const question15sum = results.reduce( (acc, val) => {
      return acc + val.question15   
    },0) 
    return Math.floor(question15sum / results.length * 100)
  }
  const totalQuestion16 = () => {
    const question16sum = results.reduce( (acc, val) => {
      return acc + val.question16   
    },0) 
    return Math.floor(question16sum / results.length * 100)
  }
  const totalQuestion17 = () => {
    const question17sum = results.reduce( (acc, val) => {
      return acc + val.question17   
    },0) 
    return Math.floor(question17sum / results.length * 100)
  }
  const totalQuestion18 = () => {
    const question18sum = results.reduce( (acc, val) => {
      return acc + val.question18   
    },0) 
    return Math.floor(question18sum / results.length * 100)
  }
  const totalQuestion19 = () => {
    const question19sum = results.reduce( (acc, val) => {
      return acc + val.question19   
    },0) 
    return Math.floor(question19sum / results.length * 100)
  }
  const totalQuestion20 = () => {
    const question20sum = results.reduce( (acc, val) => {
      return acc + val.question20   
    },0) 
    return Math.floor(question20sum / results.length * 100)
  }
  
  
  
  return (
    <MDBRow className="mb-4">
          <MDBCol md="12">
              <MDBCard>
              <MDBCardHeader>Results</MDBCardHeader>
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
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion11()} %</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion12()} %</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion13()} %</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion14()} %</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion15()} %</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion16()} %</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion17()} %</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion18()} %</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion19()} %</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>45</td>
                          <td>55</td>
                          <td>43</td>
                          <td>54</td>
                          <td>67</td>
                          <td>{totalQuestion20()} %</td>
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

