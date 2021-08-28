import React from 'react'
import Activity from './Activity'
import '../styles/index.css'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <>
                <header>
                    <h1>Monthly Activity Tracker!</h1>
                    <form>
                        <input type='text' placeholder='e.g. coding'></input>
                        <button>Add Activity</button>
                    </form>
                </header>
                <main>
                    <Activity/>
                </main>
            </>
        )
    }
}

export default App