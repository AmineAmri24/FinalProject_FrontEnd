import React from 'react'
// import { useDispatch } from 'react-redux'
// import {useNavigate}from "react-router-dom"
import {Card, Button} from "react-bootstrap"
import './card.css'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../JS(redux)/actions/user';

const UserCard = ({User}) => {


  const dispatch= useDispatch();

  return (
    <div className='cards'>
      <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>{User.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{User.email}</Card.Subtitle>
        <Card.Text>{User.role}</Card.Text>
        <Card.Text>{User.phone}</Card.Text>
        <Button variant="success">Accept</Button>
        <Button variant="danger">Refuse</Button>
        <Button variant="warning" onClick={()=> dispatch(deleteUser(User._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>

  )
}

export default UserCard;
