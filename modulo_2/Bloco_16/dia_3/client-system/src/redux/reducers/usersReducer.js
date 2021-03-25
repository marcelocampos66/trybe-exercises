import { USER } from '../actions/actionsTypes';

const INITIAL_STATE = {
  users: []
}

const usersReducer = (state = INITIAL_STATE, action) => {
  if (action.type === USER) {
    return ({
      users: [...state.users, action.user],
    })
  }
  return state;
}

export default usersReducer;
