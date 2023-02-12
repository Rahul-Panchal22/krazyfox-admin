import { API_DASHBOARD_COUNT } from "../constants/api";
import { API, DASHBOARD_F, DASHBOARD_S } from "../constants/types";

export const DashboardData = () => ({
    type: API,
    payload: {
      url: API_DASHBOARD_COUNT,
      method: "GET",
      success: (data) => ({
        type: DASHBOARD_S,
        payload: data,
      }),
      error: (data) => ({
        type: DASHBOARD_F,
        payload: data,
      }),
    },
  });
  