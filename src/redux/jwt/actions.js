import * as types from './constants';

export const remove = () => ({type: types.REMOVE});
export const verify = () => ({type: types.VERIFY});
export function add(token, email, roles, isAuthenticated) {
  console.log('hit add function');
  return {
    type: types.ADD,
    payload: {
      token: token,
      email: email,
      roles: roles,
      isAuthenticated: isAuthenticated,
    },
  };
}
