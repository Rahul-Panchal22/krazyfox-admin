import {
  API_CAMPAIGN_CREATE,
  API_CAMPAIGN_DELETE,
  API_CAMPAIGN_EDIT,
  API_CAMPAIGN_LIST,
  API_CAMPAIGN_VIEW,
  API_CATEGORIES_LISTING,
} from "../constants/api";
import {
  ADD_CAMPAIGN_F,
  ADD_CAMPAIGN_S,
  API,
  CAMPAIGN_F,
  CAMPAIGN_S,
  CATEGORY_F,
  CATEGORY_S,
  DELETE_CAMPAIGN_F,
  DELETE_CAMPAIGN_S,
  EDIT_CAMPAIGN_F,
  EDIT_CAMPAIGN_S,
  VIEW_CAMPAIGN_F,
  VIEW_CAMPAIGN_S,
} from "../constants/types";

export const CampaignListing = () => ({
  type: API,
  payload: {
    url: API_CAMPAIGN_LIST,
    method: "GET",
    success: (data) => ({
      type: CAMPAIGN_S,
      payload: data,
    }),
    error: (data) => ({
      type: CAMPAIGN_F,
      payload: data,
    }),
  },
});

export const fetchCampaign = (data) => ({
  type: API,
  payload: {
    url: API_CAMPAIGN_VIEW + data,
    method: "GET",
    success: (data) => ({
      type: VIEW_CAMPAIGN_S,
      payload: data,
    }),
    error: (data) => ({
      type: VIEW_CAMPAIGN_F,
      payload: data,
    }),
  },
});

export const deleteCampaign = (data) => ({
  type: API,
  payload: {
    url: API_CAMPAIGN_DELETE + data,
    method: "DELETE",
    success: (data) => ({
      type: DELETE_CAMPAIGN_S,
      payload: data,
    }),
    error: (data) => ({
      type: DELETE_CAMPAIGN_F,
      payload: data,
    }),
  },
});

export const AddCampaign = (data) => ({
  type: API,
  payload: {
    url: API_CAMPAIGN_CREATE,
    method: "POST",
    data: data,
    success: (data) => ({
      type: ADD_CAMPAIGN_S,
      payload: data,
    }),
    error: (data) => ({
      type: ADD_CAMPAIGN_F,
      payload: data,
    }),
  },
});

export const EditCampaignDetails = (data) => ({
  type: API,
  payload: {
    url: API_CAMPAIGN_EDIT,
    method: "PATCH",
    data: data,
    success: (data) => ({
      type: EDIT_CAMPAIGN_S,
      payload: data,
    }),
    error: (data) => ({
      type: EDIT_CAMPAIGN_F,
      payload: data,
    }),
  },
});

export const CategoriesListing = () => ({
  type: API,
  payload: {
    url: API_CATEGORIES_LISTING,
    method: "GET",
    success: (data) => ({
      type: CATEGORY_S,
      payload: data,
    }),
    error: (data) => ({
      type: CATEGORY_F,
      payload: data,
    }),
  },
});
