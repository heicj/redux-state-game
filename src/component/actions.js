import { CHOICE_ADD } from './reducers';

export function playerChoice(id){
  return {
    type: 'CHOICE_ADD',
    payload: id
  };
}