// import {Helper} from '../components/Helper'
import { PROFILE_CREATOR } from '../constants/Config'
import history from '../routes/history'

let actionPostLogin = (data) => (dispatch) => {
    // Helper.request(dispatch, 'POST', 'auth', data, (data) => {
    dispatch({
        type: 'SESSION',
        payload: {
            logged: true,
            photo: '/assets/img/user-creator.png',
            profileId: PROFILE_CREATOR,
        }
    })
    // document.body.className = document.getElementById('root').className = 'body-in'
    // dispatch(callConfigMenuGet)
    history.push('/creator/profile')
    // })
}

let actionDeleteLogin = (dispatch) => {
    // Helper.request(dispatch, 'POST', 'auth', data, (data) => {
    dispatch({
        type: 'SESSION',
        payload: {
            logged: false,
            photo: null,
            profileId: null,
        }
    })
    // document.body.className = document.getElementById('root').className = 'body-in'
    // dispatch(callConfigMenuGet)
    history.push('/account/login')
    // })
}

export { actionPostLogin, actionDeleteLogin }