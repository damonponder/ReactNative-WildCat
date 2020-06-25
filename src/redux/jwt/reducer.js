import * as types from './constants';
const initialState = {
  token: null,
  isAuthenticated: false,
  roles: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD:
      if (!action.payload.token)
        return {
          ...state,
          isAuthenticated: false,
          email: null,
          token: null,
          roles: null,
        };
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        token: action.payload.token,
        roles: action.payload.roles,
      };
    case types.REMOVE:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        email: null,
        roles: null,
      };
    case types.VERIFY:
      return {...state};
    default:
      return {...state};
  }
}
