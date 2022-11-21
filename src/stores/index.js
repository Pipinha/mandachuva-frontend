import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const initialState = {
    first: true,
    loader: false,
    error: '',
    success: '',
    config: {
        logoA: '',
        logoB: '',
        logoEloss: '',
        bgLoginA: '',
        ip: '',
    },
    session: {
        logged: false,
        name: '',
        photo: '',
        profileId: null,
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
                    name: action.payload.name,
                    photo: action.payload.photo,
                    profileId: action.payload.profileId
                }
            }
        case 'CONFIG':
            return {
                ...state,
                first: false,
                config: {
                    logoA: action.payload.logoA,
                    logoB: action.payload.logoB,
                    logoEloss: action.payload.logoEloss,
                    bgLoginA: action.payload.bgLoginA,
                    ip: action.payload.ip,
                }
            }
        default:
            break;
    }
    return state
}

const store = createStore(reducer, composedEnhancer)

export default store