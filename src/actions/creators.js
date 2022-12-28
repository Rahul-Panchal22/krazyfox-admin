import { API_CREATORS_LISTING, API_CREATORS_VIEW, API_CREATOR_VERIFY } from "../constants/api";
import {
  API,
  CREATORS_F,
  CREATORS_S,
  CREATORS_VERIFY_DOCS_F,
  CREATORS_VERIFY_DOCS_S,
  CREATORS_VIEW_F,
  CREATORS_VIEW_S,
} from "../constants/types";

export const CreatorsListing = () => ({
  type: API,
  payload: {
    url: API_CREATORS_LISTING,
    method: "GET",
    success: (data) => ({
      type: CREATORS_S,
      payload: data,
    }),
    error: (data) => ({
      type: CREATORS_F,
      payload: data,
    }),
  },
});

export const fetchCreator = (data) => 
({
  type: API,
  payload: {
    url: API_CREATORS_VIEW + data,
    method: "GET",
    success: (data) => ({
      type: CREATORS_VIEW_S,
      payload: data,
    }),
    error: (data) => ({
      type: CREATORS_VIEW_F,
      payload: data,
    }),
  },
});

export const creatorsVerify = (data, id) => 
({
  type: API,
  payload: {
    url: API_CREATOR_VERIFY,
    method: "PETCH",
    data:data,
    success: (data) => ({
      type: CREATORS_VERIFY_DOCS_S,
      payload: data,
    }),
    error: (data) => ({
      type: CREATORS_VERIFY_DOCS_F,
      payload: data,
    }),
  },
});