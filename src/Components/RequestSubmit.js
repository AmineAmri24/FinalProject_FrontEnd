import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addRequest } from '../JS(redux)/actions/request'

const RequestSubmit = () => {

    const [newRequest, setNewRequest] = useState({requestSubject :"", fullName:"", role:"", requestDetails:""})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewRequest({...newRequest, [e.target.name] : e.target.value});
    };

    const handleUser = (e) => {
            e.preventDefault();
            dispatch(addRequest(newRequest));
            navigate("/request");
          };
      

  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Request Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter the request topic"  name="requestSubject" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" name="fullName" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Function</Form.Label>
        <Form.Control type="text" placeholder="Enter your function inside the company" name="role" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Precise your request</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" placeholder="Enter your request" name="requestDetails" onChange={handleChange} />
      </Form.Group>
      <Form>

      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Click on the switch if it's an emergency"
      />
    </Form>
    <br/>
      <Link to= '/request'>
      <Button variant="primary" type="submit" onClick={handleUser}>
        Submit
      </Button>
      </Link>
      </Form>

    </div>
  )

}


export default RequestSubmit;