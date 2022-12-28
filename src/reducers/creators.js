import {
    CREATORS_S,
    CREATORS_F,
    CREATORS_VIEW_F,
    CREATORS_VIEW_S,
    CREATORS_VERIFY_DOCS_S,
    CREATORS_VERIFY_DOCS_F,
  } from "../constants/types";
  
  const initialState = {
    creators: [],
    creator: {},
    verifyDocs: {}
  };
  
  const creators = (state = initialState, action) => {
    console.log("action type ----->",action.type)
    switch (action.type) {
      case CREATORS_S:
        return { ...state, creators: action.payload.data };
      case CREATORS_F:
        return { ...state, creators: undefined };
      case CREATORS_VIEW_S:
          return { ...state, creator: action.payload.data };
      case CREATORS_VIEW_F:
          return { ...state, creator: undefined };
      case CREATORS_VERIFY_DOCS_S:
        return { ...state, verifyDocs: action.payload.data };
      case CREATORS_VERIFY_DOCS_F:
        return { ...state, verifyDocs: action.payload.data };
      default:
        return state;
    }
  };
  
  export default creators;
  