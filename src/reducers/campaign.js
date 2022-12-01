import {
  CAMPAIGN_S,
  CAMPAIGN_F,
  VIEW_CAMPAIGN_S,
  VIEW_CAMPAIGN_F,
} from "../constants/types";

const initialState = {
  campaigns: [],
  viewCampaign: {},
};

const campaign = (state = initialState, action) => {
  switch (action.type) {
    case CAMPAIGN_S:
      return { ...state, campaigns: action.payload.data };
    case CAMPAIGN_F:
      return { ...state, campaigns: undefined };

    case VIEW_CAMPAIGN_S:
      return { ...state, viewCampaign: action.payload.data };

    case VIEW_CAMPAIGN_F:
      return { ...state, viewCampaign: undefined };
    default:
      return state;
  }
};

export default campaign;
