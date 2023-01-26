import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { PROFILE_CREATOR } from '../constants/Config'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const initialState = {
    first: true,
    loader: false,
    error: '',
    success: '',
    session: {
        // logged: true,
        // photo: '/assets/img/user-creator.png',
        // profileId: PROFILE_CREATOR,
        logged: false,
        photo: null,
        profileId: null,
    },
    order: {
        messages: [
            {
                photo: '/assets/img/user-creator.png',
                side: 0,
                text: 'Hello, whatup man :D\nHello, whatup man :D\nHello, whatup man :D',
            }
        ],
    }
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
        case 'ORDER_SEND_MESSAGE':
            state.order.messages.push(action.payload)
            return {
                ...state,
                order: {
                    messages: state.order.messages,
                }
            }
        default:
            break;
    }
    return state
}

const store = createStore(reducer, composedEnhancer)

export default store