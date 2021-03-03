import { actions } from '../actions';

export default function apiReducer(state = {}, action) {
  switch (action.type) {
    case actions.fetchMembersInProgress:
      return Object.assign(state, { fetchMembersInProgress: true });
    case actions.fetchMessagesInProgress:
      return Object.assign(state, { fetchMessagesInProgress: true });
    case actions.fetchMembersFinished:
      return Object.assign(state, { fetchMembersInProgress: false });
    case actions.fetchMessagesFinished:
      return Object.assign(state, { fetchMessagesInProgress: false });

    default:
      return state;
  }
}
