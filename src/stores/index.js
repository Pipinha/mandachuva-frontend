import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PROFILE_COMPANY } from '../constants/Config'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const initialState = {
    first: true,
    loader: false,
    error: '',
    success: '',
    session: {
        logged: true,
        photo: '/assets/img/user-company.png',
        profileId: PROFILE_COMPANY,
        // logged: false,
        // photo: null,
        // profileId: null,
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIRST':
            return {
                ...state,
                first: action.payload.first,
            }
        case 'LOADER':
            return {
                ...state,
                loader: action.payload.loader,
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload.error,
            }
        case 'SUCCESS':
            return {
                ...state,
                success: action.payload.success,
            }
        case 'SESSION':
            return {
                ...state,
                session: {
                    logged: action.payload.logged,
                    photo: action.payload.photo,
                    profileId: action.payload.profileId
                }
            }
        default:
            break;
    }
    return state
}

const store = createStore(reducer, composedEnhancer)

export default store