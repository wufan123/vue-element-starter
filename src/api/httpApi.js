import axios from 'axios'
import vueApp from '../main'
let BASE_URL = _BASE_URL ? _BASE_URL : '';
let instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': 'application/json, text/javascript, */*; q=0.01'
    }
});

const infoError = (data) => {
    if (data.message)
        vueApp.$message(
            {
                message: data.message,
                type:'error'
            }
        )
};

instance.interceptors.response.use(function (response) {
    let data;
    try {
        data = JSON.parse(response.data);
    } catch (e) {
        data = response.data;
    }
    if (data.resultCode === '0') {
        return data;
    } else {
        infoError(data);
        return Promise.reject(data);
    }
}, function (error) {
    var data = error.data;
    infoError(data);
    return Promise.reject(data);
});

instance.postForm = (url, params) => {
    let form = new URLSearchParams();
    for (let i in params) {
        form.append(i, params[i]);
    }
    return instance.post(url, form);
};
export  default  instance