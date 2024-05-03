


import { useState, useEffect } from "react";


import FetchData from "./fetchTest";

import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";


import DisplayGames from "./games";


import BootButton from "./bs_components";


import VariantsExample from "./bootTest";

import ExampleCard from "./card";

import NavFunc from "./navbar";

import Stack from 'react-bootstrap/Stack';

import CardGroup from 'react-bootstrap/CardGroup';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function App() {


    
  return (

    <body style={{ height:"100vh", background:"#191970"}}>


<NavFunc />
    

<Container style ={{background:"#191970", marginTop:"2.5%"}} fluid="lg">
     

   










 

      <CardGroup>

    
   
    < DisplayGames 

    name={"redDot"}
    description = {
      `This is my first game that is not a clone.
      I drew inspiration from Missle Command and Space Invaders.
      You can think of this game as a sort of hybrid between the
      two. The goal of this game is to shoot down enemy missles
      before they destroy the city. If all buildings are
      wiped out before you shoot down the missles, you lose.`}
     />

    < DisplayGames 

    name={"blackjack"}
    description = {
      `This is a Blackjack clone. It was much harder to build than 
      I originally anticipated. What made it difficult was adding the 
      ability to split hands. I tried to implement all of the Blackjack 
      rules: splitting, insurance, double down, etc. The game plays with
      a 52 card deck. I read that most U.S. casinos play with six decks 
      shuffled together (312 cards). I chose to leave it at 52 to give
      players a better chance of guessing the dealer's hand `}
    
    
    
    />


    < DisplayGames 

    name={"snake"}
    description = {
      `This is a clone of the original Nokia Snake game. The goal of the 
      game is to control a pixelated snake and eat snake food for as 
      long as you can. As you consume food, the snake gets bigger and
      your score increases. If the snake head collides with its body or the game border, it is gameover. `}
 />

    
</CardGroup>






{/* </Stack> */}



     
</Container>
</body>

  )
  
}



