import React from 'react'
// import { useDispatch } from 'react-redux'
// import {useNavigate}from "react-router-dom"
import {Card, Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const RequestCard = ({request}) => {

  const navigate = useNavigate();


  return (
    <div className=''>
    
      <Card style={{ width: '70rem' }}>
      <Card.Body>
        <Card.Title>{request.requestSubject}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{request.fullName}</Card.Subtitle>
        <Card.Text>{request.role}</Card.Text>
        <Card.Text>{request.requestDetails}</Card.Text>
        <Button variant="success">Accept</Button>
        <Button variant="danger">Refuse</Button>
        <Button variant="warning"onClick={()=> navigate(`/edit/${request._id}`)}>Edit</Button>
      </Card.Body>
    </Card>
    </div>

  )
}

export default RequestCard;