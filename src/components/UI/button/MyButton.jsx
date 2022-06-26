//I import React  
//include the css file inside the component itself using the built-in  'classes' object

import React from "react";
import classes from './MyButton.module.css'

// Created a component PostList
const MyButton = ({children, ...props})=> {
    
    return(
        // Using the contents of a file './Button.module.css' (the styles it contains) as a property of the  'classes' object

        <button {...props} className={classes.myBtn}>  
                {children}
                
        </button>
    )
   
}

export default MyButton;