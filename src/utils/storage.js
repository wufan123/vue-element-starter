
const local = window.localStorage;
const  session = window.sessionStorage;
let localUtil = {
    KEY_USER_DETAIL:"userDetail",
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
    },
    getItem:(key)=>{
       let item;
        try {
            item = JSON.parse(session.getItem(key));
        }catch (e)
        {
            item ={};
        }
        return item;
    },
    setItem:(key,value)=>{
        let itemStr;
        try{
            itemStr = JSON.stringify(value)
        }
        catch (e){
            return;
        }
        session.setItem(key,itemStr);
    }

};

export  default  localUtil;