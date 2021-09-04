import { Component } from "react";

class TodoApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            taskItem : [],
            textContent : "",
        }
        
    }
    getText=(e)=>{
        this.setState({textContent:e.target.value})
    }

    added = ()=>{
      
        let task = this.state.taskItem;
        let text = this.state.textContent;
        task.push(text)
        this.setState( {taskItem: task} )

    }
    compleeted=(index)=>{
        let currentItems = this.state.taskItem
        currentItems.splice(index,1)
        this.setState( {taskItem:currentItems} )
    }
    render(){
        return(
            <div>
                 <h1>Todo - App</h1>
                 <label>Enter a task </label>
                 <input type="text" onChange={ this.getText} />&nbsp;
                 <button onClick={this.added}>Add</button>
                 <ul>
                     {this.state.taskItem.map((items,index)=>{
                         return<li>{items}&nbsp;<button onClick={ ()=> {this.compleeted(index)}}>Done </button></li>
                     })}
                 </ul>
            </div>
           

        )
    }
}
export default TodoApp;