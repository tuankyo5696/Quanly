import React, { Component } from 'react';

class TaskSort extends Component {
  render() {
    return (  
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown">
                                    
                                    <button type="button" 
                                            className="btn btn-primary dropdown-toggle"
                                            id="dropdownMenui"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                            >Sắp xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <a href="/" role="button" className="sort_selected">
                                                <span className="fa fa-sort-alpha-asc pr5">
                                                    Tên A-Z
                                                </span></a>
                                        </li>
                                        <li>
                                            <a href="/" role="button">
                                                <span className="fa fa-sort-alpha-desc pr5">
                                                    Tên Z-A  
                                                </span>
                                            </a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li>
                                            <a href="/" role="button">
                                                Trạng thái kích hoạt
                                            </a> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        
                    

    );
  }
}

export default TaskSort;
