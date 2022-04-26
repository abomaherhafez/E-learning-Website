import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="za3ma">
      <div className="bb">
        <MDBCard className="center" style={{ maxWidth: "28rem" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src="https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg?w=590&h=800&19535223-FF51-4AE3-A05064AFC6E375F5"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText className="class">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn>
              <Link to="/HomeStudent">
                <p style={{ margin: "0px" }} className="pp">
                  Button big one
                </p>
              </Link>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
