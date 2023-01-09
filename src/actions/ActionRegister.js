// import {Helper} from '../components/Helper'
import { PROFILE_COMPANY } from '../constants/Config'
import history from '../routes/history'

let actionPostRegister = (data) => (dispatch) => {
    // Helper.request(dispatch, 'POST', 'auth', data, (data) => {
    let photo = '/assets/img/user-creator.png'
    if (data.profileId === PROFILE_COMPANY) {
        photo = '/assets/img/user-company.png'
    }
    dispatch({
        type: 'SESSION',
        payload: {
            logged: true,
            photo: photo,
            profileId: data.profileId,
        }
    })
    // document.body.className = document.getElementById('root').className = 'body-in'
    // dispatch(callConfigMenuGet)
    let uri = '/creator/profile';
    if (data.profileId === PROFILE_COMPANY) {
        uri = '/company/profile';
    }
    history.push(uri)
    // })
}

export { actionPostRegister }