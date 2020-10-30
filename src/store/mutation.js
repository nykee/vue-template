const mutations= {
    user_login : (state,user)=>{
        sessionStorage.setItem('user',JSON.stringify(user));
        sessionStorage.setItem('login','login');

        state.isLogin  =true;
        state.user = user;

    },

};
export default  mutations;