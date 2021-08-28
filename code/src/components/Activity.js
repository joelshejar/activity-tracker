

function Activity(props){
        if(props.todo.length===0){
            return ''
        }
        let array=[]
        for(let i=1;i<=props.days+1;i++){
            array.push(<div>{i}</div>)
        }
        return [...props.todo].map((elm)=>{return(
            <section className='activity'>
                <div className='month'>
                    <h2>{elm}</h2>
                    <div>
                        <h5>{props.month}</h5>
                    </div>
                </div>
                <div className='days'>
                    {
                        array.map((elm)=>{return elm})
                    }
                </div>
                <div className='cross'>
                    <div onClick={()=>props.delete(elm)}>X</div>
                </div>
            </section>
        )}
        )
        
    }


export default Activity
