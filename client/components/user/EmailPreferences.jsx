import React from 'react';


const EmailPreferences = (props) => {

  return (
    <div className="card">
      <h2>Email Notification Preferences:</h2>
      <p>You can have up to 5 email accounts that budget basket will notifiy to</p>
      <div className="card">
      <span style={{background:'grey', color:'white'}}>{props.messages}</span>
        <input 
          placeholder="Add email..."  
          onKeyUp={(e)=>{ 
            (e.keyCode === 13)? props.addEmail():props.trackNewEmail(e) 
          }} 
          type="email"/>
        <button onClick={() =>{props.addEmail()}}>Add</button>
      </div>
      {props.emails.map((item,index)=>{
        return(
          <div className="card" key={`emailCard${index}`}>
            <div>{item.email}</div>
            <label>Use:
            <input 
              type="checkbox" 
              defaultChecked={item.status} 
              onChange={(e) =>{props.OnOffForEmail(e,item.email)}}/>
            </label>
            <div>
              <button onClick={(e) =>{props.deleteEmail(item.email)}}>Delete</button>
            </div>
          </div>
          )
      })}
    </div>
  );
};


export default EmailPreferences;