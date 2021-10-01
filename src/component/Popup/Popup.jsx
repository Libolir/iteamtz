import React, { useState } from 'react'
import './Popup.css'
import { connect } from 'react-redux'
import { AddPlayerName, AddPlayer2Name } from '../../redusers/reduser'

const Hello = (props) => {
    const [Player, setPlayer] = useState('Player')
    const [Player2, setPlayer2] = useState('Player 2')
    const [isActive, setIsActive] = useState(true)

    const ShowInput1 = (e) => {
        setPlayer(e.target.value)
    }
    
    const ShowInput2 = (e) => {
        setPlayer2(e.target.value)
    }

    const AddName = () => {
        props.AddPlayerName(Player)
        props.AddPlayer2Name(Player2)
        setIsActive(!isActive)
    }

    return(
        <div >
            {isActive &&  
                <div className='modal'>
                    <div className='modalcontent'>
                        <div className='input'>
                            <div>
                                <h4>Player</h4>
                                <input onBlur={ShowInput1} maxlength="20"/>
                            </div>
                            <div>
                                <h4>Player 2</h4>
                                <input onBlur={ShowInput2} maxlength="20"/>
                            </div>
                        </div>
                        <button onClick={AddName} >Start</button>
                    </div>
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {AddPlayerName, AddPlayer2Name})(Hello)