import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
class TaskList extends Component {
  constructor(props){
      super(props);
      this.state ={
            filterName: '',
            filterStatus: -1 // all: -1 , active : 1 , deactive : 0
      }
  }
  onChange = (event) =>{
      let target= event.target;
      let name = target.name;
      let value = target.value;
      this.props.onFilter(
        name === 'fillterName' ? value : this.state.filterName,
        name === 'filterStatus'? value : this.state.filterStatus
        )
      this.setState({
          [name] :value
      })
  }
    render() {
    let {tasks} = this.props;
    let{filterName,filterStatus} = this.state;
    let elmtasks = tasks.map((task,index)=>{
            return <TaskItem key={task.id}
                             index={index}
                             task ={task}
                            onUpdateStatus={this.props.onUpdateStatus}
                            onDelete ={this.props.onDelete}
                            onUpdate = {this.props.onUpdate}
                            />
    })
    return (
        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">STT</th>
                                            <th className="text-center">Tên</th>
                                            <th className="text-center">Trạng thái</th>
                                            <th className="text-center">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    name="filterName"
                                                    value = {filterName} 
                                                    onChange={this.onChange}
                                                    className="form-control" 
                                                />
                                            </td>
                                            <td>
                                                
                                                <select name="filterStatus"
                                                        value={filterStatus}
                                                        onChange = {this.onChange} 
                                                        className="form-control"
                                                >
                                                    <option value="-1">Tất cả</option>
                                                    <option value="0">Ẩn</option>
                                                    <option value="1">Kích hoạt</option>
                                                </select>
                                                
                                            </td>
                                            <td></td>
                                        </tr>
                                    {elmtasks}
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                        
                        
                
            
    );
  }
}
const mapStateToProps = (state) =>{
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps,null) (TaskList);
