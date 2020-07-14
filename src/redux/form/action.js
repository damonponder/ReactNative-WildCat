import * as types from './constants'

export function addInfo(submittedBy) {
    console.log('hit add function');
    return {
      type: types.SUBMITTEDBY,
      payload: {
        submittedBy:submittedBy
      },
    };
  }

  export function addType(categoryTypes){
      return {
          type: types.CATEGORYTYPE,
          payload:{
              categoryTypes:categoryTypes
          }
      }
  }

  export function addBodyPositions(bodyPositionCategories){
      return {
          type: types.BODYPOSITIONS,
          payload:{

            bodyPositionCategories:bodyPositionCategories
          }
      }
  }