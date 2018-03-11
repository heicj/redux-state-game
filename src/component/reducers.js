export const CHOICE_ADD = 'CHOICE_ADD';

const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const initialState = {
  //gameBoard: Array(9).fill('open'),
  gameBoard: squares.map(i => squares[i - 1])
};

export function game(state = initialState, { type, payload }){
  switch(type){
    case CHOICE_ADD:{ 

      let newBoard = [...state.grid];
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