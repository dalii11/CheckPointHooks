import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./AddMovie.css";

function AddMovie() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body className="inputmovie">
                    <Form.Control type="text" placeholder="Enter Titel...." />
                    <Form.Control
                        type="text"
                        placeholder="Enter Description..."
                    />
                    <Form.Control type="text" placeholder="Enter Psturl...." />
                    <Form.Control type="text" placeholder="Enter Rate..." />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;
