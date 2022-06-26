// //imported React class from "react" library
import React from "react"

// I create a component ClassCounter using a class component.
// Class component inherits from React.Component

class ClassCounter extends React.Component{
    increment(){
        setCount(count + 1)
      }
    
     decrement(){
        setCount(count - 1)
      }


    render(){
        return(
            <div>
            <h1>{count}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        )
    }


     
}