import React from 'react'
import { Container} from "react-bootstrap";
import { Row, Col} from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer set-bg" >
     <div className="page-container">
    <Container >
        <Row>
       
             <marque>ALWAYS HAPPY TO ASSIST YOU</marque> <br/>
                Online Dairy shop is happy to help you to have your products at your home                
              </Row>
        <Row className="footer">
            <Col>
            
            <a href="https://www.facebook.com/"> Facebook </a><br/>
                        <a href="https://www.instagram.com/">Instagram </a><br/>
                        <a href="https://www.twitter.com/">Twitter</a><br/>
                        <a href="https://www.youtube.com/">Youtube </a> <br/>
                   
           </Col><hr/>
            <Col>
            QUICK LINKS<br/>
            
                    <a href="/">Home</a><br/>
                        <a href="/Login">Login</a><br/>
                        <a href="/Register">Register</a><br/>
                        <a href="/ContactUs">Contact Us</a><br/>
                    </Col>
                 
                                 </Row>
                     </Container>
            </div>
            </footer>

    )
}
