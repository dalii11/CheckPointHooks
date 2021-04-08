import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import ReactStars from "react-stars";

function MyNavBar({ getRateSearch, getTitleSearch }) {
    const ratingChanged = (newRating) => {
        getRateSearch(newRating);
    };
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Movie App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={35}
                    color2={"#ffd700"}
                    half={false}
                />
                <FormControl
                    onChange={(e) => getTitleSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default MyNavBar;
