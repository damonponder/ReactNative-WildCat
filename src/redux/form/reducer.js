import * as types from './constants';
const initialState = {
  submittedBy:null
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case types.SUBMITTEDBY:
      return {
        ...state,
        submittedBy: action.payload.submittedBy
      };
      default:
      return {...state};
    }
}