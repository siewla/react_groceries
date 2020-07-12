import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue darken-2 fixed-bottom">
        <MDBContainer fluid className="text-center">
          &copy; {new Date().getFullYear()} Built and Designed by <a href="https://github.com/siewla/react_groceries"> SiewLa </a>
        </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;