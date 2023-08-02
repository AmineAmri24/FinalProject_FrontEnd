import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSwitch } from '../../JS(redux)/actions/switch';
import SwitchCard from './SwitchCard';

const SwitchList = () => {

    const listShifts = useSelector((state)=> state.switchReducer.listShifts);

    const load = useSelector(state => state.switchReducer.load);

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getSwitch());
    }, [dispatch]);


  return (
    <div>{ load ? (<h2> loading ... </h2>) : (listShifts.map((el) => < SwitchCard shift={el} key={el.id}/>))}</div>
  )
}

export default SwitchList;