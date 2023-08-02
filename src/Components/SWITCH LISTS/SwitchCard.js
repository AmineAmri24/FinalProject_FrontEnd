import React from 'react'
// import { useDispatch } from 'react-redux'
// import {useNavigate}from "react-router-dom"
import {Card, Button} from "react-bootstrap"

const SwitchCard = ({shift}) => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

  return (
    <div>
    
      SWITCH_SHIFTS
      <Card style={{ width: '70rem' }}>
      <Card.Body>
        <Card.Title>{shift.Department}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{shift.Identity}</Card.Subtitle>
        <Card.Text>{shift.shift}</Card.Text>
        <Button variant="success">Accept</Button>
        <Button variant="danger">Refuse</Button>
      </Card.Body>
    </Card>
    </div>

  )
}

export default SwitchCard
