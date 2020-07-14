import * as types from './constants';
const initialState = {
  submittedBy:null,
  categoryTypes:null,
  bodyPositionCategories:[]
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case types.SUBMITTEDBY:
      return {
        ...state,
        submittedBy: action.payload.submittedBy
      };
    case types.CATEGORYTYPE:
        return {
            ...state,
            categoryTypes: action.payload.categoryTypes
        };
    case types.BODYPOSITIONS:
    return {
        ...state,
        bodyPositionCategories:action.payload.bodyPositionCategories

    }
      default:
      return {...state};
    
    }
}