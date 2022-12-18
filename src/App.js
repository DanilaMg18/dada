import React, {useState} from "react";
import ChangeOnOtherBlock from "./components/ChangeBlock";

function App() {
  let [form,setForm] = useState({
    username: 'Danila',
    password: '12345',
  })

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
      render()
    }else {
      alert('Incorrect')
    }
  }

  function render() {
    return(
      <ChangeOnOtherBlock/>
    )
  }

  return (
    <div className="App">
      <form onSubmit={trueFalse}>
        <div className="login-block">
          <input className="Input1" type='text' id="inp1" name='Username' placeholder='Username' onChange={handleChange}/>
          <input className="Input2" type='text' id="inp2" name='Password' placeholder='Password' onChange={handleChange}/>
          <button className="button-login">LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default App;
