import {
    CREATORS_S,
    CREATORS_F,
    CREATORS_VIEW_F,
    CREATORS_VIEW_S,
  } from "../constants/types";
  
  const initialState = {
    creators: [],
    creator: {}
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
      default:
        return state;
    }
  };
  
  export default creators;
  