export const CHOICE_ADD = 'CHOICE_ADD';

export const initialState = {
  gameBoard: Array(9).fill(''),
  activePlayer: 'X'
};

export function game(state = initialState, { type, payload }){
  switch(type){
    case 'CHOICE_ADD':{ 

      let newBoard = [...state.gameBoard];
      const { activePlayer } = state;
      const newPlayer = (activePlayer === 'X') ? 'O' : 'X'; 
      newBoard[payload] = activePlayer;
      
      

      return {
        ...state,
        gameBoard: newBoard,
        activePlayer: newPlayer
      };
    }  
    default:
      return state;
  }
}