
const initialState={
    user:localStorage.getItem('user') || false
};

export default (state=initialState,action)=>{
    switch (action.type) {
        case 'login':
            return{...state,user:action.payload};
        case 'logout':
            return {...state,user:false};
        default:
            return {...state}
    }
}