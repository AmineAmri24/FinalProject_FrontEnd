import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from'./Pages/Profile';
import Error from './Pages/Error';
import NavBar from './Components/NavBar';
import { useDispatch } from 'react-redux';
import { current } from './JS(redux)/actions/user';
import Requests from './Pages/Requests';
import Shifts from './Pages/Shifts';
import Switchdemand from './Components/Switchdemand';
import RequestSubmit from './Components/RequestSubmit';
import Users from './Pages/Users';
import EditRequest from './Components/REQUEST LISTS/EditRequest';
import EditSwitch from './Components/SWITCH LISTS/EditSwitch';
// import { currentAdmin } from './JS(redux)/actions/admin';
import Footer from './Components/Footer';






function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem("token")){
      // if you want the admin login also and its token kept working , just add && currentAdmin() after current() 
      dispatch(current())
    }
  }, [dispatch]);
  
  return (
    <div className="App">
      <NavBar/>

<Routes>

  <Route path='/' element= {<Home/>}/>
  <Route path='/login' element= {<Login/>}/>
  <Route path='/register' element= {<Register/>}/>
  <Route path='/profile' element= {<Profile/>}/>
  <Route path='/switch' element= {<Shifts/>}/>
  <Route path='/switch/add' element= {<Switchdemand/>}/>
  <Route path='/switch/edit' element= {<EditSwitch/>}/>
  <Route path='/request' element= {<Requests/>}/>
  <Route path='/request/add' element= {<RequestSubmit/>}/>
  <Route path='/edit/:id' element= {<EditRequest/>}/>
  <Route path='/users' element= {<Users/>}/>
  <Route path='/*' element= {<Error/>}/>
  
</Routes>
<Footer/>
    </div>
  );
}

export default App;
