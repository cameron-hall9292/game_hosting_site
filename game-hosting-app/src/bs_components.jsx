

import Button from "react-bootstrap/Button";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function BootButton({buttonLabel}){

    return (
    <>

        
        <Button style= {
            {background:"purple",
            margin:"10px",
            padding:"15px",    }
                }>{buttonLabel} </Button>
    
    </>
    )
}

