import React from 'react'
import { MDBCol, MDBRow } from 'mdbreact';


const NotFoundPage =  () => {
  return (
    <React.Fragment>
      <div className="full">
        <MDBRow className="bad-gateway-row">
          <MDBCol md="8">
            <h4>The requested URL was not found on this server.</h4>
          </MDBCol>
          <MDBCol md="4">
          </MDBCol>
        </MDBRow>
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage;