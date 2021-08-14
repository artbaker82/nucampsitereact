import * as ActionTypes from "./ActionTypes";
export const Partners = (state = { isLoading: true, errMess: null, partners: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PARTNERS:
      console.log(state, action);
      return {
        ...state,
        isLoading: false,
        errMess: null,
        partners: action.payload,
      };
    case ActionTypes.PARTNERS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        partners: [],
      };

    case ActionTypes.PARTNERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };

    default:
      return state;
  }
};

// export const Promotions = (state = { isLoading: true, errMess: null, promotions: [] }, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_PROMOTIONS:
//       return { ...state, isLoading: false, errMess: null, promotions: action.payload };

//     case ActionTypes.PROMOTIONS_LOADING:
//       return { ...state, isLoading: true, errMess: null, promotions: [] };

//     case ActionTypes.PROMOTIONS_FAILED:
//       return { ...state, isLoading: false, errMess: action.payload };

//     default:
//       return state;
//   }
// };
