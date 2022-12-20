import React, {useState} from "react";
import Login from "./Login";
import Main from "./Main";

function App(props) {
  let [show,setShow] = useState(true)
  let [form,setForm] = useState({
    username: 'Danila',
    password: '12345',
  })

  function handlerClick() {
    setShow(!show)
  }

  function handleChange (e) {
    const {name} = e.target
    setForm (prev => {
      return{
        ...prev,
        [name] : e.target.value
      }
    })
  }

  function trueFalse(e) {
    e.preventDefault()
    if(form.username !== '' && form.password !== '') {
      trueLogin()
    }else {
      alert('Zapolnite')
    }
  }

  function trueLogin (e) {
    if(form.username === document.getElementById('inp1').value && form.password === document.getElementById('inp2').value ) {
      handlerClick()
    }else {
      alert('Incorrect')
    }
  }

  return (
    <div className="App">
      {show && <Login trueFalse={trueFalse} trueLogin={trueLogin} />}
      {!show && <Main/>}
    </div>
  );
}

export default App;
