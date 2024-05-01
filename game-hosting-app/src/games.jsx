



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';





import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";


export default function DisplayGames({name, height = 250, width = 250, description}){

let baseUrl = "http://localhost:5500/"

let linkUrl = baseUrl + name;

let imgUrl = linkUrl + "/image";


    return (
        <>

        {/* <Router>

            <Link to= {linkUrl}>

            <img className="image" src={imgUrl} height={height} width={width} alt="picture representative of game that links user to game when clicked"></img>
            <figcaption className="caption">{name}</figcaption>

            </Link> */}

      


        

            <Card style={{ width: '18rem', color: "black" }} bg="dark" text="light">
                <Card.Header>{name}</Card.Header>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>
                    <Button variant="success" href={linkUrl}>play {name}</Button>
                    </Card.Title>
                <Card.Text ><details style={{marginTop:"2.5rem"}} open="true"><summary style={{marginBottom:"0.5rem"}}>Game Summary</summary>{description}</details></Card.Text>
              
            
            </Card.Body>
            </Card>

        
        {/* </Router> */}

    </>
    )
}