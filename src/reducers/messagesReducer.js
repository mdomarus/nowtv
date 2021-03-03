import { actions } from '../actions';

export default function messagesReducer(state = { messages: [] }, action) {
  switch (action.type) {
    case actions.fetchMessages:
      return [...action.payload];

    default:
      return state;
  }
}
