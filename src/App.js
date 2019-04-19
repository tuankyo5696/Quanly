import React, { Component } from 'react';
import './App.css';
import './Components/TaskForm';
import TaskForm from './Components/TaskForm';
import TaskControl from './Components/TaskControl';
import TaskList from './Components/TaskList';
import {connect} from 'react-redux';
import * as  actions from './actions/index';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskEditing: null,
      filter : {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy : 'name',
      sortValue: 1
    }
    }
  onToggleForm =() =>{
    this.props.onToggleForm();  
  }
  onCloseForm =() =>{
    this.props.onCloseForm();
  }
  onShowForm = () =>{
    this.props.onShowForm();
  }
  onSubmit = (data)=>{
    let {tasks} =this.state;
    if (data.id === ''){
      data.id = this.generateID()
      tasks.push(data)
    }else{
      let index = this.findIndex(data.id)
      tasks[index] = data;
    }
    
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  // onUpdateStatus =(id) =>{
  //   let {tasks} = this.state
  //   let index = this.findIndex(id)
  //   if(index !== -1){
  //     tasks[index].status = ! tasks[index].status;
  //     this.setState({
  //     tasks : tasks
  //   })

  //   }
  //       localStorage.setItem('tasks',JSON.stringify(tasks));
  // }
  // onDelete =(id) =>{
  //     let {tasks} =this.state
  //     let index  = findIndex(tasks,(task)=>{
  //         return task.id === id;
  //     })
  //     if(index !== -1){
  //       tasks.splice(index,1);
  //       this.setState({
  //         tasks : tasks
  //       })
  //     }
  //     localStorage.setItem('tasks',JSON.stringify(tasks))
  // }
  onUpdate = (id) =>{
      let {tasks} = this.state
      let index = this.findIndex(id)
      let taskEditing = tasks[index];
      this.setState({
        taskEditing : taskEditing 
      });
      this.onShowForm();
  }

  findIndex = (id) =>{
    let {tasks} = this.state
    let result = -1;
    tasks.forEach((task,index)=>{
        if(task.id === id)
            result = index;
    })
    return result;
  }
  onFilter = (filterName,filterStatus) =>{
     filterStatus = parseInt(filterStatus,10);
     this.setState({
       filter:{
         name: filterName.toLowerCase(),
         status: filterStatus
       }
     })
  }
  onSearch = (keyword)=>{
   
    this.setState({
      keyword: keyword
    })
  }
  onSort = (sortBy,sortValue) =>{
      this.setState({
        sortBy : sortBy,
        sortValue: sortValue
      })
  }
  
  render() {
    let {
        
        taskEditing,
        
        sortBy,
        sortValue
      }= this.state;
    
    let {isDisplayForm} = this.props  
    // if(filter){
    //   if(filter.name){
    //       tasks=  tasks.filter((task)=>{
    //           return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //       });
    //   }
     
    //     tasks = tasks.filter((task)=>{
    //         if(filter.status === -1){
    //             return task;
    //         }
    //         else {
    //             return task.status === (filter.status === 1 ? true : false)
    //         }
    //     })
      
    // }
    // if(keyword){
    //   tasks=  tasks.filter((task)=>{
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    //     });
    // }
    // if(sortBy === 'name'){
    //     tasks.sort((a,b)=>{
    //       if(a.name > b.name) return sortValue;
    //       else if(a.name < b.name) return -sortValue;
    //       else return 0;
    //     }) ; 
    // }
    // else{
    //   tasks.sort((a,b)=>{
    //     if(a.status > b.status) return -sortValue;
    //     else if(a.status < b.status) return   sortValue;
    //     else return 0;
    //   }) ;
    // }
    let elmTaskForm = isDisplayForm
          ? <TaskForm 
                      onCloseForm={this.onCloseForm}
                      task ={taskEditing}
                      /> 
          :''
    return (
     
        <div className="container">
            <div className="text-center">
                <h1>Quản lý công việc</h1>
            </div>
            
            <div className="row">
                <div className={isDisplayForm? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                    {elmTaskForm}
                </div>
                <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button type="button"
                           className="btn btn-primary"
                           onClick = {this.onToggleForm}
                           >
                        <span className="fa fa-plus mr-5"></span>Thêm công việc
                    </button>
                        {/* {<!-- { Search-Sort} -->} */}
                              <TaskControl
                                onSearch = {this.onSearch}
                                onSort ={this.onSort}
                                sortBy = {sortBy}
                                sortValue ={sortValue}
                              />
                        {/* <!-- List --> */}
                              <TaskList
                                
                               
                                onUpdate ={this.onUpdate}
                                onFilter ={this.onFilter}
                              />
                </div>
                
            </div>
            
        </div>  
    );
  }

}
const mapStateToProps = state =>{
    return {
      isDisplayForm : state.isDisplayForm
    } ;
};

const mapDispatchToProps = (dispatch,props) =>{
    return {
        onToggleForm: () =>{
            dispatch(actions.toggleForm())
        },
        onCloseForm: () =>{
            dispatch(actions.closeForm())
        },
        onShowForm : () =>{
            dispatch(actions.openForm())
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps) (App);
