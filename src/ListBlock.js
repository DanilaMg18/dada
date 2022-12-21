import React from "react";

export default function ListBlock() {
    return(
        <div className="containerList">
            <div className="listBlock">
                <span>First Name:</span>
                <span>Last Name:</span>
                <span>Email:</span>
                <span>PhoneNumber:</span>
                <span>Country:</span>
                <span>City:</span>
            </div>
            <div className="listButtons">
                <button className="listBtn1">Create</button>
                <button className="listBtn2">Delete</button>
            </div>
        </div>
    )
}