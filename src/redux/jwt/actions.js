import * as types from './constants';

export function remove(){
  return{
    type: types.REMOVE
    ,payload:{
  }}}
export const verify = () => ({type: types.VERIFY});
export function add(token, email, roles, isAuthenticated) {
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
