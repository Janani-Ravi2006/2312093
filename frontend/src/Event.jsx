import React from 'react';
function Event({notification,setNotification})
{
   notification=notification.filter((f)=>f.Type==="Event")
  return(
    <div>
     <h2>Event</h2>

     <h1>Event Message</h1>
     <div className="container">
       {notification.map((n,index)=>(
        <div key={index} className="place">
         
          <h2>{n.Message}</h2>
          </div>
      ))}
      </div> 
    </div>
  )
}
export default Event;