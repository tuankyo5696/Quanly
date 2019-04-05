let  initalize = false; 

let myReducer = (state = initalize, action) => {
    if(action.type === 'TOGGLE_STATUS'){
        state.status = !state.status;
        return state;
    }
    
    return state;
}
export default myReducer;
