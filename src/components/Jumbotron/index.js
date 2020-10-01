import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import "./style.css"

const JumbotronPage = () => {
    return (
        <div className="jumbotron">
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{ padding: 0 }}>
                            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{
                                backgroundColor: '#F5CFDA'
                            }}>
                                <MDBCol className="py-5">
                                    < MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Elevated Rustic</MDBCardTitle>
                                    <p className="mx-5 mb-5">A Collection By Celeste Briggs</p>

                                    <div className="collBtn">
                                        <MDBBtn outline color="white" className="mb-5"><MDBIcon className="mr-2"></MDBIcon>View the Collection</MDBBtn>
                                    </div>

                                </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </div >

    )
}

export default JumbotronPage;