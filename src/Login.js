import React from "react";

export default function Login(props) {
    return(
        <form>
            <div className="login-block">
                <input className="Input1" type='text' value={props.formDetails.username}  name='Username' placeholder='Username' onChange={(e) => {props.changeFormDetails(e.target.value)}}/>
                <input className="Input2" type='text' value={props.formDetails.password} name='Password' placeholder='Password' onChange={(e) => {props.changeFormPassword(e.target.value)}}/>
                <button className="button-login" onClick={props.trueFalse}>LOGIN</button>
            </div>
      </form>
    )
}