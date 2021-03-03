import { getMembers, getMessages } from './data';

export const actions = {
  fetchMembers: 'members/fetchMembers',
  fetchMembersFinished: 'API/fetchMembersFinished',
  fetchMembersInProgress: 'API/fetchMembersInProgress',
  fetchMessages: 'messages/fetchMessages',
  fetchMessagesFinished: 'API/fetchMessagesFinished',
  fetchMessagesInProgress: 'API/fetchMessagesInProgress',
};

export function fetchMessages() {
  return (dispatch, getState) => {
    const state = getState();
    if (!state.API.fetchMessagesInProgress) {
      dispatch({ type: actions.fetchMessagesInProgress });
      return getMessages()
        .then((data) => {
          const payload = data.sort((a, b) => new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf());
          dispatch({ type: actions.fetchMessages, payload });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          dispatch({ type: actions.fetchMessagesFinished });
        });
    }
  };
}

export function fetchMembers() {
  return (dispatch, getState) => {
    const state = getState();
    if (!state.API.fetchMembersInProgress) {
      dispatch({ type: actions.fetchMembersInProgress });
      return getMembers()
        .then((payload) => {
          dispatch({ type: actions.fetchMembers, payload });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          dispatch({ type: actions.fetchMembersFinished });
        });
    }
  };
}
