import React, {useState} from "react";
import CreateBlock from "./CreateBlock";
import ListBlock from './ListBlock'

export default function Main() {
    let [changeBlocks,setChangeBlocks] = useState(true)

    function clickHandler() {
      setChangeBlocks(!changeBlocks)
    }

    let [data,setData] = useState({
        firstname: '',
        Lastname: '',
        Email: '',
        PhoneNumber: '',
        Country: '', 
        City: ''
    })
    
    function handleChanger(e) {
        const {name} = e.target
        setData (data=> {
            return{
                ...data,
                [name] : e.target.value
            }
        })
    }


    return (
        <div className="container">
            <div className="buttons">
                <button className="btn1" onClick={clickHandler}>Create</button>
                <button className="btn2" onClick={clickHandler}>List</button>
            </div>
            {changeBlocks && <CreateBlock userDetails={data} handler={handleChanger}/>}
            {!changeBlocks && <ListBlock/>}
        </div>
    )
}