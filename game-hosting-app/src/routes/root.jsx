





import NavFunc from "../navbar";

import HomeImage from "../home-img";

import RootLayOut from "../grid";

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';


import {
    createBrowserRouter,
    RouterProvider,
    Link,
  } from "react-router-dom";
  


export default function Root(){

    const baseUrl = "http://localhost:5500";

    const arcadeImage = "arcade.png";

    const getImage = baseUrl + "/api/" + arcadeImage;

    console.log(getImage);

    return (
    <>
     
       

        <body style={{ height:"100vh", background:"#191970"}}>

        <NavFunc  />

        <Container style={{ padding:"20px", marginTop:"5%" }}>
      <Row >
        <Col  ><HomeImage  imageName = {getImage} /></Col>
        <Col style={{color:"white"  }}>    <p style={{padding:"20px", fontSize:"25px"}} >Welcome to my online arcade,
            where you can play 2D games built with Javascript, HTML, and CSS.
           To get started, click the button below and select a game you would like to play.
         </p>
         <Link to={"/Games"}>
         <Button variant="success"  style={{marginLeft:"50%"}}>Games</Button>

            </Link>
        
            </Col>
      </Row>
    
    </Container>
        
       </body>

        </>
    )
}
