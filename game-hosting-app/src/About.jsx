

import NavFunc from "./navbar"

import Row from "react-bootstrap/esm/Row";

import Col from "react-bootstrap/esm/Col";

import Container from "react-bootstrap/esm/Container";



export default function About(){

    return(
    <>

<body style={{ height:"100vh", background:"#191970", color:"white"}}>
    < NavFunc />
    <Container style={{}} fluid="md">
    <Row style={{ textAlign:"center", margin:"2.5%", padding:"1%"}}>
    <h1>About</h1>

    </Row>

    <Row style={{ margin: "1%", padding:"1%", fontSize:"25px"}}> 

    <p> In order to learn Javascript, HTML, and CSS, 
            I thought classic arcade games would make for fun projects.
            Since I spent a lot of time building these games,
            I thought it would be a shame not to have a platform to host 
            then on. I hope you enjoy playing them as much as I enjoyed building them.
        </p>
        
         </Row>
   
     

    </Container>
 
            </body>
        </>
    )
}
