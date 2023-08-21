import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap"
import { useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../JS(redux)/actions/user'
import { loginAdmin } from '../JS(redux)/actions/admin'
// import { loginAdmin } from '../JS(redux)/actions/admin'


const Login = () => {
const [user, setUser] = useState({});

const [admin, setAdmin] = useState({});

  // const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {

    setUser ({...user, [e.target.name]: e.target.value})

    setAdmin({...admin, [e.target.name]: e.target.value})

  }

  const handleUser = (e) => {
    e.preventDefault();
    // in case you want to add admin login just add after login (user) this syntaxe : && login(admin)
    dispatch(login(user));
    navigate("/profile");
  };
  return (
    <div>
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name='email' onChange={handleChange} />
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name='password' onChange={handleChange} />

        <Link to = "/profile">
        <Button variant="primary" type="submit" onClick={handleUser}>
        login
      </Button>
      </Link>
    </div>
  )
}

export default Login