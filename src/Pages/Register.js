import React from 'react'
import {Form, Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../JS(redux)/actions/user'

const Register = () => {

  const [newUser, setnewUser] = useState({});

  // const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setnewUser({...newUser, [e.target.name] : e.target.value});
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
    navigate("/profile");
  };

  return (
    <div>
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} />
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
        <Form.Label>function</Form.Label>
        <Form.Control type="text" placeholder="Enter your role" name="role" onChange={handleChange} />
        <Form.Label>phone</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone" name="phone" onChange={handleChange} />

        <Link to = "/profile">
        <Button variant="primary" type="submit" onClick={handleUser}>
        register
      </Button>
      </Link>
    </div>
  )
}

export default Register;