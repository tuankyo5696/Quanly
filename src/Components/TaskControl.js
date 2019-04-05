import React, { Component } from 'react';
import TaskSearch from './TaskSearchControl';
import TaskSort from './TaskSortControl';
class TaskControl extends Component {
  render() {
    return (
    
                        <div className="row mt-15">   
                            {/* <!-- Search --> */}
                           <TaskSearch 
                            onSearch = {this.props.onSearch}
                           
                            />    
                            {/* <!-- Sort --> */}
                           <TaskSort
                             onSort ={this.props.onSort}
                             sortBy = {this.props.sortBy}
                             sortValue = {this.props.sortValue}
                            
                           />
                        </div>
                    

    );
  }
}

export default TaskControl;
