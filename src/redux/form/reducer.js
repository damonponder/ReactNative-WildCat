import * as types from './constants';

const initialState = {
    submittedBy:null,
    locationOrArea:null,
    date:null,
    department:null,
    responsibleSupervisor:null,
    categoryType:null,
    bodyPositionCategories:[],
    environmentalConditions:[],
    healthCategories:[],
    toolsAndEquipmentCategories:[],
    procedureAndStandardsCategories:[],
    qualityRelatedCategories:[],
    useofPPECategories:[],
    workingConditionsCategories:[]
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case types.SUBMITTEDBY:
      return {
        ...state,
        submittedBy: action.payload.submittedBy,
        locationOrArea: action.payload.locationOrArea,
        date:action.payload.date,
        department:action.payload.department,
        responsibleSupervisor:action.payload.responsibleSupervisor
      };
    case types.OBSERVATIONTYPE:
        return {
            ...state,
            observationType:action.payload.observationType,
            observationDescription:action.payload.observationDescription
        }
    case types.CATEGORYTYPE:
        return {
            ...state,
            categoryType: action.payload.categoryType,
            categoryDescription: action.payload.categoryDescription
        };
    case types.BODYPOSITIONS:
        
        const newBodyPositionCategories = state.bodyPositionCategories.concat(action.payload.bodyPositionCategories);
        return {
            ...state,
            bodyPositionCategories:newBodyPositionCategories

        }
    case types.ENVIRONMENTALCONDITIONS:
        console.log(action.payload.environmentalConditionCategories)
        const newEnvironmentalConditionCategories = state.environmentalConditions.concat(action.payload.environmentalConditionCategories);
        return {
            ...state,
            environmentalConditions:newEnvironmentalConditionCategories
    
        }
        case types.HEALTHCATEGORIES:
        return {
            ...state,
            healthCategories:action.payload.healthCategories
    
        }
        case types.PROCEDUREANDSTANDARDSCATEGORIES:
        return {
            ...state,
            procedureAndStandardsCategories:action.payload.procedureAndStandardsCategories
    
        }
        case types.TOOLSANDEQUIPMENTCATEGORIES:
        return {
            ...state,
            toolsAndEquipmentCategories:action.payload.toolsAndEquipmentCategories
        }
        case types.QUALITYRELATEDCATEGORIES:
            return {
                ...state,
                qualityRelatedCategories:action.payload.qualityRelatedCategories
        
            }
            case types.USEOFPPECATEGORIES:
                return {
                    ...state,
                    useofPPECategories:action.payload.useofPPECategories
            
                }
                case types.WORKINGCONDITIONSCATEGORIES:
                return {
                    ...state,
                    workingConditionsCategories:action.payload.workingConditionsCategories
            
                }
            case types.CLEARFORM:
                return {
                    
                    submittedBy:null,
                    locationOrArea:null,
                    date:null,
                    department:null,
                    responsibleSupervisor:null,
                    categoryType:null,
                    bodyPositionCategories:[],
                    environmentalConditions:[],
                    healthCategories:[],
                    toolsAndEquipmentCategories:[],
                    procedureAndStandardsCategories:[],
                    qualityRelatedCategories:[],
                    useofPPECategories:[],
                    workingConditionsCategories:[]
                }
      default:
      return {...state};
    
    }
}