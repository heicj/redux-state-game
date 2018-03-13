import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { game, players } from './component/reducers';


const reducer = combineReducers({
  game,
  players
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

window.onbeforeunload = () => {
  const { players } = store.getState().players;
  window.localStorage.players = JSON.stringify(players);
};

export default store;