import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as  actions from '../actions/index'
class TaskItem extends Component{
    onUpdateStatus =() =>{
        this.props.onUpdateStatus(this.props.task.id);           
    }
    onDeleteItem = ()=>{
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
   }
   onUpdate = ()=>{
    this.props.onUpdate(this.props.task.id);
  }
  onSelectedItem = () => {
    //   this.props.onSelectedItem(this.props.task);
    this.props.onOpenForm();
  }
 
    render(){
        
        return(
         
                <tr>
                                          <td>{this.props.index+1}</td>
                                            <td>{this.props.task.name}</td>
                                            <td className="text-center">
                                                <span className={this.props.task.status===true?'label label-danger' :
                                            'label label-success'}
                                                    onClick={this.onUpdateStatus}
                                            >{this.props.task.status===true?'Kích hoạt':'Ẩn'}</span>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" 
                                                        className="btn btn-warning"
                                                        onClick = {this.onSelectedItem}
                                                        >
                                                        <span className="fa fa-pencil mr5"></span>Sửa
                                                </button>
                                                &nbsp;  
                                                <button type="button" 
                                                        className="btn btn-danger"
                                                        onClick = {this.onDeleteItem}
                                                        >
                                                        <span className="fa fa-trash mr5"></span>Xóa
                                                </button>
                                                
                                            </td>
                                          </tr>
            
        )
    }
}

const mapStateToProps = state =>{
    return {} ;
};

const mapDispatchToProps = (dispatch,props) =>{
    return {
        onUpdateStatus: (id) =>{
            dispatch(actions.updateStatus(id));  
        },
        onDeleteTask: (id) =>{
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm : () =>{
            dispatch(actions.openForm());
                
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(TaskItem)