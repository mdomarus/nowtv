import { actions } from '../actions';

export default function membersReducer(state = { members: [] }, action) {
  switch (action.type) {
    case actions.fetchMembers:
      return [...action.payload];

    default:
      return state;
  }
}
