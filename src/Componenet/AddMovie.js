import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function AddMovie({ addMovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setnewMovie] = useState({});
  let onChangehand = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <div className="addmovie">
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>ImgSrc</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Img Src"
                name="imgsrc"
                onChange={onChangehand}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title Mouvie"
                name="title"
                onChange={onChangehand}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Year Movie"
                name="year"
                onChange={onChangehand}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Rating"
                name="rating"
                onChange={onChangehand}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addMovie(newMovie)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie;
