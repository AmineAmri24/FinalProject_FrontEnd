import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { editRequest, getOneRequest } from '../../JS(redux)/actions/request';
import {Form, Button} from 'react-bootstrap'

const EditRequest = () => {

  const [newRequest, setNewRequest] = useState({requestSubject:"", fullName :"", role : "", requestDetails:""})

  const dispatch = useDispatch();

  const requestToGet = useSelector((state) => state.requestReducer.requestToGet);

  const match = useMatch('/edit/:id');

  const navigate = useNavigate();

  const handleChange = (e) => {setNewRequest({...newRequest, [e.target.name] : e.target.value})}

  useEffect(() => {
    dispatch(getOneRequest(match.params.id))});

    const handlEdit = () => {
      dispatch(editRequest(match.params.id, newRequest))
      navigate(-1)
    }
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Request Subject</Form.Label>
        <Form.Control type="text" placeholder={`${requestToGet.requestDetails}`} value={newRequest.requestDetails} name="requestDetails" 
    onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder={`${requestToGet.fullName}`} value={newRequest.fullName} name="fullName" 
    onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Function</Form.Label>
        <Form.Control type="text" placeholder={`${requestToGet.role}`} value={newRequest.role} name="role" 
    onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Precise your request</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" placeholder={`${requestToGet.requestDetails}`} value={newRequest.requestDetails} name="requestDetails" 
    onChange={handleChange} />
      </Form.Group>
      </Form>

      <Button variant="primary" type="submit"  onClick={handlEdit}>
        Submit
      </Button>

    </div>
  )
}

export default EditRequest
