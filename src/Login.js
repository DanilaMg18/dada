import React from "react";

export default function Login(props) {
    return(
        <form onSubmit={props.trueFalse}>
            <div className="login-block">
                <input className="Input1" type='text' id="inp1" name='Username' placeholder='Username' onChange={props.handle}/>
                <input className="Input2" type='text' id="inp2" name='Password' placeholder='Password' onChange={props.handle}/>
                <button className="button-login" onClick={props.changeBlock}>LOGIN</button>
            </div>
      </form>
    )
}