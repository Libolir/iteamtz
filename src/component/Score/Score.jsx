import React, { useState } from "react";
import './Score.css'
import Hello from '../Popup/Popup' 
import { connect } from "react-redux";

const Score = (props) => {

    return ( 
        <div className='text'>
            <p>Score :</p>
            <p> {props.Player1} : {props.wins1} </p>
            <p> {props.Player2} : {props.wins2}</p>
            <Hello />
        </div>
    );
}

let mapStateToProps = (state) => ({
    Player1: state.Player1,
    Player2: state.Player2,
    wins1: state.wins1,
    wins2: state.wins2,
})

export default  connect(mapStateToProps, {})(Score);