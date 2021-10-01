import { createStore, applyMiddleware} from 'redux'

let initialstate = {
    Player1: "Player",
    Player2: "Player 2", 
    wins1: '0', 
    wins2: '0',
}


const NameReduser = (state = initialstate, action) => {
    switch (action.type){
        case 'ADD_PLAYER1_NAME':
            return {
                ...state,
                Player1: action.name
            }
        case 'ADD_PLAYER2_NAME':
            return {
                ...state,
                Player2: action.name
            }
        case 'SCORE_PLAYER1':
            return {
                ...state,
                wins1: action.score
            }
        case 'SCORE_PLAYER2':
            return {
                ...state,
                wins2: action.score
            }
        default: 
            return state
    }
}

export const AddPlayerName = (name) => ({ type: 'ADD_PLAYER1_NAME', name})
export const AddPlayer2Name = (name) => ({ type: 'ADD_PLAYER2_NAME', name})
export const ScorePlayer1 = (score) => ({ type: 'SCORE_PLAYER1', score})
export const ScorePlayer2 = (score) => ({ type: 'SCORE_PLAYER2', score})

let store = createStore(NameReduser, applyMiddleware());

export default store;