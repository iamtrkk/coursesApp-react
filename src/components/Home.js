import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home = () => {

    useEffect(()=>{
        document.title= "Home";
    }, []);

    return (
        <div className="jumbotron text-center">
            <h1>Learn Coding</h1>
            <p>This is developed by Trk for learning purpose backend is on Spring boot and frontend is on React</p>
            <Container>
            <Button color="primary" outline>Start Using</Button>
            </Container>
        </div>
    )
}
export default Home;