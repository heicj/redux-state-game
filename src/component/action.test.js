import { CHOICE_ADD } from './reducers';
import { playerChoice } from './actions';
it ('creates a choice action', () => {
  const { type, payload } = playerChoice({ type: CHOICE_ADD, payload: 4 });
  expect(type).toBe(CHOICE_ADD);
});