import React from "react";

export default function Login(props) {
    return(
        <form onSubmit={props.trueFalse()}>
            <div className="login-block">
                <input className="Input1" type='text' id="inp1" name='Username' placeholder='Username' onChange={props.handleChange()}/>
                <input className="Input2" type='text' id="inp2" name='Password' placeholder='Password' onChange={props.handleChange()}/>
                <button className="button-login">LOGIN</button>
            </div>
      </form>
    )
}