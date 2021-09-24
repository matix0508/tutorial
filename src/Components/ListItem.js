import React, {useState} from "react";

export default function ListItem(props) {
    let darkCss = ''
    if (props.dark) {
      darkCss = ' list-group-item-dark'
    }
    const [clicks, setClicks] = useState(0);
    const clicksInfo = clicks > 0 ? "clicked " + clicks + " times" : "";
    console.log(clicks)
    return (
      <li onClick={() => setClicks(clicks+1)} className={"list-group-item" + darkCss}>
          {props.children} {clicksInfo}
        </li>
    )
  }
  