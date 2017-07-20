import httpApi from './httpApi'

const prefix = '/serviceUser';

const LOGIN= `${prefix}/serviceLogin.do`;

export default {
    login (params) {
        // return httpApi.get(LOGIN,{params:params})
        return httpApi.postForm(LOGIN,params)
    }
}
