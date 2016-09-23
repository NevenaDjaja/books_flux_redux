import { createStore } from 'redux';
import mainReducer from '../reducers';

let configStore = (initState) => {
  const store = createStore(mainReducer, initState, 
    window.devToolsExtension ? window.devToolsExtension() : undefined);
  return store;
}

export default configStore;