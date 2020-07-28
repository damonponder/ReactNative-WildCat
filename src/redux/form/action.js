import * as types from './constants'

export function addInfo(submittedBy,locationOrArea,date,department,responsibleSupervisor) {
    return {
      type: types.SUBMITTEDBY,
      payload: {
        submittedBy:submittedBy,
        locationOrArea:locationOrArea,
        date:date,
        department:department,
        responsibleSupervisor:responsibleSupervisor
      },
    };
  }
  export function addObservationType(observationType,observationDescription){
    return {
        type: types.OBSERVATIONTYPE,
        payload:{
           observationType:observationType,
            observationDescription:observationDescription
        }
    }
}
  export function addCategoryType(categoryType,categoryDescription){
      return {
          type: types.CATEGORYTYPE,
          payload:{
              categoryType:categoryType,
              categoryDescription:categoryDescription
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
  export function addEnvironmentalConditions(environmentalConditionCategories){
    return {
        type: types.ENVIRONMENTALCONDITIONS,
        payload:{

          environmentalConditionCategories:environmentalConditionCategories
        }
    }
}
export function addHealthCategories(healthCategories){
    return {
        type: types.HEALTHCATEGORIES,
        payload:{

          healthCategories:healthCategories
        }
    }
}
export function addToolsAndEquipmentCategories(toolsAndEquipmentCategories){
    return {
        type: types.TOOLSANDEQUIPMENTCATEGORIES,
        payload:{
           toolsAndEquipmentCategories :toolsAndEquipmentCategories

        }
    }
}
export function addProceduresAndStandardsCategories(proceduresAndStandardsCategories){
    return {
        type: types.PROCEDUREANDSTANDARDSCATEGORIES,
        payload:{

          proceduresAndStandardsCategories:proceduresAndStandardsCategories
        }
    }
}
export function addQualityRelatedCategories(qualityRelatedCategories){
    return {
        type: types.QUALITYRELATEDCATEGORIES,
        payload:{

          qualityRelatedCategories:qualityRelatedCategories
        }
    }
}
export function addUseofPPECategories(useofPPECategories){
    return {
        type: types.USEOFPPECATEGORIES,
        payload:{

            useofPPECategories:useofPPECategories
        }
    }
}
export function addWorkingConditionsCategories(workingConditionsCategories){
    return {
        type: types.WORKINGCONDITIONSCATEGORIES,
        payload:{

            workingConditionsCategories:workingConditionsCategories
        }
    }
}

export function clearForm(){
    return {
        type:types.CLEARFORM,
        payload:{}
    }
}
