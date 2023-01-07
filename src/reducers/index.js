import { combineReducers } from 'redux';

import api from './api';
import auth from './auth';
import campaign from './campaign';
import brands from './brands'
import creators from './creators'
import kyc from './kyc';

const rootReducer = combineReducers({
    api,
    auth,
    campaign,
    brands,
    creators,
    kyc
})

export default rootReducer;