import * as types from './../constants/actionTypes';

export const listAll = () =>{
    return {
        types: types.LIST_ALL,
    }
};

export const addTask = (task) =>{
    return {
        types: types.ADD_TASK,
        task // task: task
    }
}
export const toggleForm = ()=>{
    return {
        types: types.TOGGLE_FORM

    }
}
export const openForm = ()=>{
    return {
        types: types.OPEN_FORM
        
    }
}
export const closeForm = ()=>{
    return {
        types: types.CLOSE_FORM
        
    }
}