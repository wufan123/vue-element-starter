
const local = window.localStorage;
let localUtil = {
    getUser:() => {
        let user = {
            loginName: '',
            password: '',
            keepPass: false
        };
        if(local.getItem('user'))
        {
            try {
                user = JSON.parse(local.getItem('user'));
            }
            catch (e) {

            }
        }
        return user;
    },
    setUser:(user)=>{
        let userStr;
        try{
            userStr= JSON.stringify(user)
        }
        catch (e)
        {
            return;
        }
        local.setItem('user',userStr)
    },
    clearUser:()=>{
        local.removeItem('user')
    }
};
export  default  localUtil;