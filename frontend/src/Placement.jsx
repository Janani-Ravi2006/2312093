import React from 'react';
function Placement({notification,setNotification})
{
   notification=notification.filter((f)=>f.Type==="Placement")
  return(
    <div>
     <h2>Placement</h2>
     <br>
     </br>
     <h1>Company name</h1>
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
export default Placement;