import {
    GET_LIST_KYC_S,
    GET_LIST_KYC_F,
  } from "../constants/types";
  
  const initialState = {
    kycListing: [],
  };
  
  const kyc = (state = initialState, action) => {
    console.log("action type ----->",action.type)
    switch (action.type) {
      case GET_LIST_KYC_S:
        return { ...state, kycListing: action.payload.data };
      case GET_LIST_KYC_F:
        return { ...state, kycListing: undefined };
      default:
        return state;
    }
  };
  
  export default kyc;
  