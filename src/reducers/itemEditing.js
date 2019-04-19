import * as types from '../constants/actionTypes';

let initialState = {} 

let myReducer = (state = initialState ,action) =>{
    switch(action.type){
        case  types.EDIT_TASK:
            return state;
        default: return state;
    }
    
}

export default myReducer;
