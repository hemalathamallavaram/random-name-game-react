import React, { Component } from 'react';
import './NameList.css';
import List from '../../containers/List/List';
import Jumbotron from '../../containers/Jumbotron/Jumbotron';
import Seperator from '../../containers/Seperator/Seperator';

interface IState {
    names:string[],
    name:string,
    chooseName:string
} 
interface IProps{

}
class NameList extends Component<IProps,IState>{
    constructor(){
        super({});
        this.state = {
            name:'',
            names:[],
            chooseName:''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.addNameToList = this.addNameToList.bind(this);
        this.removeNameFromList = this.removeNameFromList.bind(this);
        this.pickRandomName = this.pickRandomName.bind(this);
    }

    handleChangeName(event:any){
        this.setState({name:event.target.value});
    }
    addNameToList(){
        let names = [...this.state.names];
        names.push(this.state.name);
        this.setState({
            names:names
        })
    }
    removeNameFromList(event:React.MouseEvent<HTMLButtonElement>,name:string){
        let names = this.state.names;
        const index = names.indexOf(name);
        if (index > -1) {
            names.splice(index, 1);
          }
        console.log(names);
        this.setState({names:names});
    }
    pickRandomName(){
        console.log('pick random name');
        const getRandomName =(max:number) =>{
            let index = Math.floor(Math.random() * Math.floor(max));
            return this.state.names[index];
          }
        const assignRandomName = ()=> {
            let name  = getRandomName(this.state.names.length)
            console.log(name);
            if(name !== this.state.chooseName){
                this.setState({chooseName:name})
            }
        }
        console.log(assignRandomName());
    }
    render(){
        let names = this.state.names.map((name,index)=>{
            return (
                <List key={index} 
                      name={name}
                      removeName={(event)=>this.removeNameFromList(event,name)} />
            )
        })
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                    <div className="input-group">
                        <span className="input-group-addon" 
                        id="basic-addon1">Name</span>
                        <input onChange={this.handleChangeName} 
                                value={this.state.name} 
                                type="text" 
                                className="form-control" 
                                placeholder="Username" 
                                aria-describedby="basic-addon1" />
                    </div>
                    <Seperator />
                    <button className="btn btn-success" 
                                onClick={this.addNameToList}>
                        Add Name
                    </button>
                    <Seperator />
                    <div className="panel panel-default">
                        <div className="panel-heading">List of Names Entered by User</div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {names}
                            </ul>
                        </div>
                    </div>
                    <Seperator />
                    <button className="btn btn-success" onClick={this.pickRandomName}>Pick a Random Name</button>
                    <Seperator />
                    <div className="panel panel-default">
                        <div className="panel-heading">This is the randomly choosen name by you</div>
                        <div className="panel-body">
                            <Jumbotron name={this.state.chooseName}/>
                        </div>
                    </div>   
                    </div>
                </div>
            </div>
          );
    }
}

export default NameList;
