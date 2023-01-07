import { API_PAYMENTS, API_PAYMENTS_createBucket, API_PAYMENTS_creatorPayout, API_PAYMENTS_fetch_transaction, API_PAYMENTS_fetch_transaction_details, API_PAYMENTS_update } from "../constants/api";
import { API, PAYMENTS_F, PAYMENTS_S, PAYMENTS_UPDATE_F, PAYMENTS_UPDATE_S, PAYMENTS_CREATOR_PAYOUT_S, PAYMENTS_CREATOR_PAYOUT_F, PAYMENTS_CREATE_BUCKET_S, PAYMENTS_CREATE_BUCKET_F, PAYMENTS_FETCH_TRANSACTION_S, PAYMENTS_FETCH_TRANSACTION_F, PAYMENTS_FETCH_TRANSACTION_DETAILS_S, PAYMENTS_FETCH_TRANSACTION_DETAILS_F } from "../constants/types";

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

export const paymentUpdate = (data) => ({
  type: API,
    payload: {
      url: API_PAYMENTS_update,
      method: "POST",
      data: data,
      success: (data) =>
      ({
        type: PAYMENTS_UPDATE_S,
        payload: data,
      }),
      error: (data) => ({
        type: PAYMENTS_UPDATE_F,
        payload: data,
      }),
    },
})

export const paymentPayout = (data) => ({
  type: API,
    payload: {
      url: API_PAYMENTS_creatorPayout + data,
      method: "GET",
      success: (data) =>
      ({
        type: PAYMENTS_CREATOR_PAYOUT_S,
        payload: data,
      }),
      error: (data) => ({
        type: PAYMENTS_CREATOR_PAYOUT_F,
        payload: data,
      }),
    },
})

export const paymentCreateBucket = (data) => ({
  type: API,
    payload: {
      url: API_PAYMENTS_createBucket,
      method: "POST",
      data: data,
      success: (data) =>
      ({
        type: PAYMENTS_CREATE_BUCKET_S,
        payload: data,
      }),
      error: (data) => ({
        type: PAYMENTS_CREATE_BUCKET_F,
        payload: data,
      }),
    },
})

export const paymentTransactionBucket = () => ({
  type: API,
    payload: {
      url: API_PAYMENTS_fetch_transaction,
      method: "GET",
      success: (data) =>
      ({
        type: PAYMENTS_FETCH_TRANSACTION_S,
        payload: data,
      }),
      error: (data) => ({
        type: PAYMENTS_FETCH_TRANSACTION_DETAILS_F,
        payload: data,
      }),
    },
})

export const paymentTransactionDetails = (data) => ({
  type: API,
    payload: {
      url: API_PAYMENTS_fetch_transaction_details + data,
      method: "GET",
      success: (data) =>
      ({
        type: PAYMENTS_FETCH_TRANSACTION_DETAILS_S,
        payload: data,
      }),
      error: (data) => ({
        type: PAYMENTS_FETCH_TRANSACTION_DETAILS_F,
        payload: data,
      }),
    },
})