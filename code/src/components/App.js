import React from 'react'
import Activity from './Activity'
import '../styles/index.css'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            month:localStorage.getItem('month')?localStorage.getItem('month'):'',
            todo:localStorage.getItem('todo')?localStorage.getItem('todo').split(','):[],
            days:30
            
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        let months=['January','February','March','April','May','June','July','August','September','October','November','December']
        var d=new Date()
        var presentMonth = months[d.getMonth()]
        let daysTotal=new Date(2021, [d.getMonth()+1],0).getDate()
        let allTasks=[...this.state.todo].concat(event.target[0].value)
        this.setState({
            month: presentMonth,
            todo:[...this.state.todo].concat(event.target[0].value),
            days:daysTotal
        })
        event.target[0].value=''
        localStorage.setItem('month', presentMonth)
        console.log(this.state.month)
        localStorage.setItem('todo', allTasks)
    }
    handleDelete=(elm)=>{
        
        let allTasks=localStorage.getItem('todo').split(',')
        var index= allTasks.indexOf(elm)
        allTasks.splice(index,1)
        var index2= [...this.state.todo].indexOf(elm)
        this.setState({
            todo:[...this.state.todo].splice(index2,1)
        })
        localStorage.setItem('todo', allTasks)
    }
    
    
    render(){
        return(
            <>
                <header>
                    <h1>Monthly Activity Tracker!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input  type='text' placeholder='e.g. coding'></input>
                        <button >Add Activity</button>
                    </form>
                </header>
                <main>
                    <Activity delete={this.handleDelete} days={this.state.days} todo={this.state.todo} month={this.state.month}/>
                </main>
            </>
        )
    }
}

export default App
