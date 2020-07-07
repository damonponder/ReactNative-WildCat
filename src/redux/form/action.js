import * as types from './constants'

export function add(submittedBy) {
    console.log('hit add function');
    return {
      type: types.ADD,
      payload: {
        submittedBy:submittedBy
      },
    };
  }