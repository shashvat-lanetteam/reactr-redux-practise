
export const loginmethod=(payload)=>{
  return dispatch => {
      localStorage.setItem('user',payload.username);
      dispatch({type:'login',payload});
  }
};

export const logoutMethod=()=>{
    return dispatch => {
        localStorage.clear();
        dispatch({type:'logout'});
    }
};