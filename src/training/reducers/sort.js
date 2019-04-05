let  initalize =  {
        by : 'name',
        value: 1 // 1 tang , -1 giam
    }




let myReducer = (state = initalize, action) => {
    if(action.type === 'SORT'){
        let {by,value} = action; // by = action.by
        let {status} = state; // status = state.status
        return {
            status : status, // old state
            sort : { // new state
                by: by,
                value: value
            }
        }   
    }
    return state;
}
export default myReducer;