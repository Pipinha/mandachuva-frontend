import axios from "axios"
import history from '../routes/history'
import { toast } from 'react-toastify'

let Helper = {
    httpGet(name, defaultValue = '') {
        let url = window.location.href;
        name = name.replace(/[[]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);

        if (!results) return defaultValue;
        if (!results[2]) return defaultValue;
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    request(dispatch, method, url, data, success, error, loader) {
        if (typeof (data) == 'undefined') {
            data = {}
        }
        if (typeof (loader) == 'undefined') {
            loader = true
        }
        if (loader) {
            // dispatch(setLoader(true))
        }
        let urlRequest = '/request.php?method=' + encodeURI(method) + '&url=' + btoa(url)
        if (window.location.href.indexOf('localhost:3000') !== -1) {
            urlRequest = 'http://localhost:8020' + urlRequest
        }
        let token = localStorage.getItem('token')
        if (!token) {
            token = ''
        }
        axios({
            method: method,
            url: urlRequest,
            data: data,
            headers: { 'token': token }
        }).then((res) => {
            if (loader) {
                // dispatch(setLoader(false))
            }

            if (typeof (res.data.response) !== 'object' || typeof (res.data.data) === 'undefined') {
                toast.error('Resposta do servidor inválida')
                return
            }

            let response = res.data.response
            let data = res.data.data

            if (typeof (response.code) !== 'number' || typeof (response.msg) !== 'string') {
                toast.error('Resposta do servidor inválida')
                return
            }

            if (response.code !== 0) {
                toast.error(response.msg)
                switch (response.code) {
                    case 2:
                        history.goBack()
                        break;
                    case 3:
                        history.push('/account/login')
                        break;
                    default:
                        break;
                }
                return;
            }

            if (typeof (success) == 'function') {
                success(data)
            }

            if (typeof (error) == 'function') {
                error(response)
            }
        })
    },
    uploadFileOne(callback){
        let file = document.createElement('input')
        file.setAttribute('type', 'file')
        file.setAttribute('accept', '.jpg,.jpeg,.png')
        file.click()
        file.onchange = function (a) {
            if (typeof (a.target.files[0]) !== 'object') {
                if (typeof (callback) === 'function') {
                    callback('Tentativa inválida!')
                }
                return
            }
            if (typeof(a.target.files[0]) !== 'object') {
                if (typeof (callback) == 'function') {
                    callback('Objeto do arquivo é inválido!')
                }
                return
            }

            let file = a.target.files[0]

            if (!(/image/i).test(file.type)) {
                if (typeof (callback) == 'function') {
                    callback('Arquivo ' + file.name + ' não é uma imagem.', null)
                }
                return;
            }
            var reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function (event) {
                callback(false, event.target.result)
            }
        }
    }
}
export default Helper