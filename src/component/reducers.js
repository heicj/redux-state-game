export const CHOICE_ADD = 'CHOICE_ADD';

export const initialState = {
  gameBoard: Array(9).fill(''),
  activePlayer: 'X',
  turns: 0
};

export function game(state = initialState, { type, payload }){
  switch(type){
    case 'CHOICE_ADD':{ 

      let newBoard = [...state.gameBoard];
      const { activePlayer } = state;
      const newPlayer = (activePlayer === 'X') ? 'O' : 'X'; 
      newBoard[payload] = activePlayer;
      
      let totalTurns = state.turns;
      totalTurns++;
      
      
      

      return {
        ...state,
        gameBoard: newBoard,
        activePlayer: newPlayer,
        turns: totalTurns
      };
    }  
    default:
      return state;
  }
}