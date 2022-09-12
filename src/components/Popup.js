import React from "react";
import './Popup.css'
import Skull from '../Icons/skull.png'


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-Btn" onClick={() => props.setTrigger(false)}>
                    <img src={Skull} alt="Skull"/>
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup