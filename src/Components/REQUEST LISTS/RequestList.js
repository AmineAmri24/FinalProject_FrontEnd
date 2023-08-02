import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRequest } from '../../JS(redux)/actions/request';
import RequestCard from './RequestCard';
import './reqList.css'

const RequestList = () => {

    const listRequest = useSelector((state)=> state.requestReducer.listRequests);

    const load = useSelector(state => state.requestReducer.load);

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getRequest());
    }, [dispatch]);


  return (
    <div className='reqlist'>{ load ? (<h2> loading ... </h2>) : (listRequest.map((el) => < RequestCard request={el} key={el.id}/>))}</div>
  )
}

export default RequestList;