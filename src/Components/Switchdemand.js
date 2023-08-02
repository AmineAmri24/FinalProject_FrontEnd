import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addSwitch } from '../JS(redux)/actions/switch'

const Switchdemand = () => {

    const [newSwitch, setNewSwitch] = useState({Department:"", Identity:"", shift:""})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewSwitch({...newSwitch, [e.target.name] : e.target.value});
    };

    const handleUser = (e) => {
            e.preventDefault();
            dispatch(addSwitch(newSwitch));
            navigate("/switch");
          };
        
  return (
    <div>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Department concerned</Form.Label>
        <Form.Control type="text" placeholder="Enter your department" name="Department" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="number" placeholder="Enter your ID"  name="Identity" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>shift exchange</Form.Label>
        <Form.Control type="text" placeholder="Please, precise date and hours of the demanded shift" name="shift" onChange={handleChange} />
      </Form.Group>
         
    <br/>
    <Link to= '/switch'>
      <Button variant="primary" type="submit" onClick={handleUser}>
        Submit
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default Switchdemand;
