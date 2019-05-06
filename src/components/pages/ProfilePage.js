import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBCardHeader } from 'mdbreact';

const ProfilePage = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBCardHeader><h5>Account</h5></MDBCardHeader>
          <MDBRow className="mb-4">
            <MDBCol md="12" lg="4" className="mb-4 text-center">
            <br />
            <img src="https://avatars1.githubusercontent.com/u/42980377?s=400&u=dc5c60ac817e12f928da2c26a89763186d556a02&v=4" className="img-fluid z-depth-1 rounded-circle" alt="" />
            </MDBCol>
            <MDBCol md="12" lg="4" className="mb-4 text-center">
              <MDBCardText>
                <br />
                Profile 
                <br />
                Name: Karlo Koodari
                <br />
                Address: Way 15
          </MDBCardText>
            </MDBCol>
            <MDBCol md="12" lg="4" className="mb-4 text-center">
              <MDBCardText>
          </MDBCardText>
              <MDBBtn href="#">Logout</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default ProfilePage