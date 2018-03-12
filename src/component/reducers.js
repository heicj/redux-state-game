export const CHOICE_ADD = 'CHOICE_ADD';
export const WIN_GAME = 'WIN_GAME';

export const initialState = {
  gameBoard: Array(9).fill(''),
  player1: {
    color: 'red'
  },
  player2: {
    color: 'black'
  },
  activePlayer: 'player1',
  turns: 0,
  winner: ''
};

export function game(state = initialState, { type, payload }){
  switch(type){
    case 'CHOICE_ADD':{ 

      let newBoard = [...state.gameBoard];
      const { activePlayer } = state;
      const newPlayer = (activePlayer === 'player1') ? 'player2' : 'player1'; 
      let totalTurns = state.turns;
      if(newBoard[payload] === ''){ 
        newBoard[payload] = activePlayer;
        totalTurns++;
      } 
        
      return {
        ...state,
        gameBoard: newBoard,
        activePlayer: newPlayer,
        turns: totalTurns
      };
    }  
    case WIN_GAME:
      return {
        ...state,
        winner: payload
      };
    default:
      return state;
  }
}