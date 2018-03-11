export const CHOICE_ADD = 'CHOICE_ADD';

//const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const initialState = {
  gameBoard: Array(9).fill('open'),
  //gameBoard: squares
};

export function game(state = initialState, { type, payload }){
  switch(type){
    case 'CHOICE_ADD':{ 

      let newBoard = [...state.gameBoard];
      newBoard[payload] = true;

      return {
        ...state,
        newBoard
      };
    }  
    default:
      return state;
  }
}