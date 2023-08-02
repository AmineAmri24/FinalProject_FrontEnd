import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard';
import { getUsers } from '../../JS(redux)/actions/user';
import './card.css'

const UserList = () => {

    const listUsers = useSelector((state)=> state.userReducer.listUsers);

    const load = useSelector((state) => state.userReducer.loadUser);

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getUsers());
    }, [dispatch]);


  return (
    <div className='userlist'>{ load ? (<h2> loading ... </h2>) : (listUsers.map((el) => < UserCard User={el} key={el.id}/>))}</div>
  )
}

export default UserList;