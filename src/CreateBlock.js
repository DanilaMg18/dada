import React from "react";

export default function CreateBlock(props) {
    return(
        <div className="CreateBlock">
            <input className="Inp_createBlock1" type='text' value={props.userDetails.firstname}  name='firstname' placeholder='Username' onChange={props.handler}/>
            <input className="Inp_createBlock2" type='text' value={props.userDetails.Lastname} name='Lastname' placeholder='Lastname' onChange={props.handler}/>
            <input className="Inp_createBlock3" type='text' value={props.userDetails.Email} name='Email' placeholder='Email' onChange={props.handler}/>
            <input className="Inp_createBlock4" type='text' value={props.userDetails.PhoneNumber} name='PhoneNumber' placeholder='PhoneNumber' onChange={props.handler}/>
            <input className="Inp_createBlock5" type='text' value={props.userDetails.Country} name='Country' placeholder='Country' onChange={props.handler}/>
            <input className="Inp_createBlock6" type='text' value={props.userDetails.City} name='City' placeholder='City' onChange={props.handler}/>
            <button className="create_btn">Create</button>
        </div>
    )
}