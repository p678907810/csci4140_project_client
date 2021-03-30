import React,{Fragment} from 'react';
  
const Contact = () =>{
    return (
    <Fragment>
        <fieldset>
          <legend><strong>CONTACT DETAILS:</strong></legend>
          <p>Email:-help@codedec.com</p>  
          <p>Phone:-000000000000</p>  
          <p>Youtube:-random</p>  
          <p>Youtube:-random</p>  
        </fieldset>
    </Fragment>
    )
}
export default Contact;
/*
import React from 'react';
const Contact = (props) =>{
    return (
    <div className="contact">
        <h3>Contact List</h3>
        <ol className="contact-list">
            {props.contact.map((contact)=>(
                <li key={contact.id} className='contact-list-item'>
                <div classsName='contact-details'>
                <p><strong>Name:-</strong>{contact.name}</p>    
                <p><strong>Email:-</strong>{contact.handle}</p>    
                </div>
                <button className="contact-remove" onClick={()=>props.onDeleteContact(contact)}>
                    Remove
                </button>   
                </li>
            ))}
        </ol>
    </div>
    )
}
export default Contact;
*/