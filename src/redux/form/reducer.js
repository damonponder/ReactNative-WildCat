import * as types from './constants';

const initialState = {
  submittedBy:null,
  locationOrArea:null,
  date:null,
  department:null,
  responsibleSupervisor:null,


  categoryTypes:null,
  bodyPositionCategories:[],
   environmentalCondtions:[],
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
            categoryDescription:action.payload.categoryDescription
            
        };

    case types.BODYPOSITIONS:
    return {
        ...state,
        bodyPositionCategories:action.payload.bodyPositionCategories

    }
    case types.ENVIRONMENTALCONDITIONS:
        return {
            ...state,
            environmentalCondtions:action.payload.environmentalConditionCategories
    
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
      default:
      return {...state};
    
    }
}