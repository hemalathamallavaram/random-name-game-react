

import React,{MouseEvent} from 'react';
import Button from '../Button/Button';
interface ButtonProps {
    removeName: React.MouseEventHandler<HTMLButtonElement>
    name:string
  }
function List(props:ButtonProps) {

  return (
    <li className="list-group-item">
        <div className="row">
            <div className="col-md-6">
            {props.name}
            </div>
            <div className="col-md-6">
            <button onClick={(event)=>props.removeName(event)} className="btn btn-danger">Remove Name</button>
            </div >
        </div>
    </li>
  );
}

export default List;