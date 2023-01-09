// import {Helper} from '../components/Helper'
import { PROFILE_COMPANY, PROFILE_CREATOR } from '../constants/Config'
import history from '../routes/history'

let actionPostLogin = (data) => (dispatch) => {
    // Helper.request(dispatch, 'POST', 'auth', data, (data) => {
    let photo = '/assets/img/user-creator.png'
    let profileId = PROFILE_CREATOR
    if (data.login === 'company@test.com') {
        photo = '/assets/img/user-company.png'
        profileId = PROFILE_COMPANY
    }
    dispatch({
        type: 'SESSION',
        payload: {
            logged: true,
            photo: photo,
            profileId: profileId,
        }
    })
    // document.body.className = document.getElementById('root').className = 'body-in'
    // dispatch(callConfigMenuGet)
    let uri = '/creator/profile';
    if (profileId === PROFILE_COMPANY) {
        uri = '/company/profile';
    }
    history.push(uri)
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