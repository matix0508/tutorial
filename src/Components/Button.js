import React, {useState} from "react"


export default function Button(props) {
    
    return (
      <button onClick={props.onClick} type="button" className="btn btn-primary">{props.children}</button>
    )
  }