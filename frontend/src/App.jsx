import React,{useState,useEffect} from 'react';
import {NavLink,Route, Routes} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Placement from './Placement'
import Event from './Event'
import Result from './Result'

function App()
{
  const [notification,setNotification]=useState([]);
  const handleSubmit=async()=>{
     const res=await axios.get("http://localhost:5000/notification",{timeout:500});
    setNotification(res.data.notifications);
    console.log(res.data.notifications);
  }
  return(
    <div className="hero">
      <h1>Campus Notification Platform</h1>
      <div className="nav"> 
      <NavLink to="/">Home</NavLink>
      <NavLink to="/placement">Placement</NavLink>
      <NavLink to="/event">Event</NavLink>
      <NavLink to="/result">Result</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/placement" element={<Placement notification={notification} setNotification={setNotification}/>}/>
        
        <Route path="/event" element={<Event notification={notification} setNotification={setNotification}/>}/>
        <Route path="/result" element={<Result notification={notification} setNotification={setNotification}/>}/>
        
      </Routes>
      <button onClick={handleSubmit}>Click</button>
      {/* {notification.map((n,index)=>(
        <div key={index}>
          <h1>{n.Type}</h1>
          </div>
      ))} */}
    </div>
  )
}
export default App;