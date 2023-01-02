import { API_PAYMENTS } from "../constants/api";
import { API, PAYMENTS_F, PAYMENTS_S } from "../constants/types";

export const PaymentListing = (data) => ({
    type: API,
    payload: {
      url: API_PAYMENTS + data,
      method: "GET",
      success: (data) =>
      ({
        type: PAYMENTS_S,
        payload: data,
      }),
      error: (data) => ({
        type: PAYMENTS_F,
        payload: data,
      }),
    },
  });