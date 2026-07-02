import React from 'react';
function Result({notification,setNotification})
{
   notification=notification.filter((f)=>f.Type==="Result")
  return(
    <div>
     <h2>Result</h2>
     <br>
     </br>
     <h1>Result Message</h1>
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
export default Result;