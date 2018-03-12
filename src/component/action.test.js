import { CHOICE_ADD } from './reducers';
import { playerChoice } from './actions';

it('creates a choice action', () => {
  const index = 0;
  const result = playerChoice(index);
  const dispatch = jest.fn();
  const getState = jest.fn(() => ({
    game: {
      gameBoard: ['', '', '', '', '', '', '', '', '']
    }
  }));
  result(dispatch, getState);

  expect(dispatch).toBeCalledWith({
    type: 'CHOICE_ADD',
    payload: index
  });
  expect(getState).toBeCalled();
});
  
