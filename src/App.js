import React, {useState} from "react";
import Login from "./Login";
import Main from "./Main";


function App(props) {
  let user = {
    username: 'Danila',
    password: '12345',
  }
  let [show,setShow] = useState(true)
  let [form,setForm] = useState({
    username: '',
    password: '',
  })

  function setUserName(username){
    setForm({...form,username})
  }

  function setPassword(password){
    setForm({...form,password})
  }

  function handlerClick() {
    setShow(!show)
  }

  function trueFalse(e) {
    e.preventDefault()
    if (form.username === '' || form.password === '') {
      alert('Please Fill All The Fields')
    } else {
      if (form.password === user.password && form.username === user.username) {
        handlerClick()
      }else {
        alert ("Wrong Password")
      }
    }
  }

  return (
    <div className="App">
      {show && <Login formDetails={form} changeFormDetails={setUserName} changeFormPassword={setPassword} trueFalse={trueFalse} />}
      {!show && <Main/>}
    </div>  
  );
}

export default App;
