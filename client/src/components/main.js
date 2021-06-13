import {connect} from 'react-redux'
import React, {useRef, useState} from 'react'
function Main(props) 
{ 
     return  <ul>
            {props.employes.map((employed) => {
             return <li>{`name: ${employed.firstName} ${employed.firstName} status: ${employed.status}`}</li>
        })}</ul>
}

export default connect((state) => {
        return {
            employes:state.employedReducer.employes,
        }
    },
    (dispatch)=>{
        return{
            updateEmployed:(employed)=>dispatch(actions.updateEmployed(employed))
        }
    }
)(Main)
