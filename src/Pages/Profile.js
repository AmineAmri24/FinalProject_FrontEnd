import React from 'react'
import { useSelector } from 'react-redux'
import {Card} from "react-bootstrap"

const Profile = () => {

  const user = useSelector((state) => state.userReducer.user);
  return (
    <div> 
      <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
    <Card.Body>
      <Card.Title>{user && user.name}</Card.Title>
      <Card.Text>{user && user.email}</Card.Text>
      <Card.Text>{user && user.phone}</Card.Text>
      
    </Card.Body>
  </Card>
  </div>
  )
}

export default Profile;