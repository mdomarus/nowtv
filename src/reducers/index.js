import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messagesReducer from './messagesReducer';
import membersReducer from './membersReducer';
import apiReducer from './apiReducer';

export const createRootReducer = (history) =>
  combineReducers({
    members: membersReducer,
    messages: messagesReducer,
    router: connectRouter(history),
    API: apiReducer,
  });
