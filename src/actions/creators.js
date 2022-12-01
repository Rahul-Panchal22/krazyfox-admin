import { API_CREATORS_LISTING, API_CREATORS_VIEW } from "../constants/api";
import {
  API,
  CREATORS_F,
  CREATORS_S,
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
