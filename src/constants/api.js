export const {
    REACT_APP_API_BASE: API_BASE
} = process.env

export const API_LOGIN = `${API_BASE}login`
export const API_CATEGORIES_LISTING = `${API_BASE}categories`

// Creators
export const API_CREATORS_LISTING = `${API_BASE}dashboard`
export const API_CREATORS_VIEW = `${API_BASE}creators`

// Campaign API call url's
export const API_CAMPAIGN_LIST = `${API_BASE}campaigns/all`
export const API_CAMPAIGN_VIEW = `${API_BASE}campaigns`
export const API_CAMPAIGN_CREATE = `${API_BASE}campaigns/create`
export const API_CAMPAIGN_EDIT = `${API_BASE}campaigns/edit-campaign`
export const API_CAMPAIGN_DELETE = `${API_BASE}campaigns/delete/`

// Brand API call url's
export const API_BRANDS_LIST = `${API_BASE}brands/all`
export const API_BRAND_CREATE = `${API_BASE}brands/create`
export const API_BRAND_EDIT = `${API_BASE}brands/edit-brand`
export const API_BRAND_VIEW = `${API_BASE}brands`
export const API_BRAND_DELETE = `${API_BASE}brands/delete/`

// KYC API Call url's
export const GET_KYC_LIST = `${API_BASE}kyc`

// creators VerifyDocs 
export const Creator = `${API_BASE}creators/verifyDocs`