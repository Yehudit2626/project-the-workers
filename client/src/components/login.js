import {connect} from 'react-redux'
import React, {useRef, useState} from 'react'
function Login(props) {
    const refToEmail = useRef(null)
    const refToPassword = useRef(null)


    const onLogin= ()=>{
        fetch('http://localhost:3010/checkPermission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email:refToEmail.current.value, password:refToPassword.current.value})
        })
            .then((response) => {
                return response.json()
            })
            .then((result)=>
            {
                if(result.employed)
                {
                    props.updateCurrentUser({currentUser:result.employed, isManager:result.isManager})
                }

                else
                {
                    alert('error')
                }
               
            })
    } 
    return(
        <>
        <div>
        <h2>Login</h2>
        <label>email</label><br></br>
        <input ref={refToEmail}></input><br></br>
        <label>password</label><br></br>
        <input ref={refToPassword}></input><br></br>
        <button onClick={onLogin}>login</button>
        </div>
        </>
    )  
}


export default connect((state) => {
        return {
            currentUser:state.employedReducer.currentUser,
            isManager:state.employedReducer.isManager
        }
    },
    (dispatch)=>{
        return{
            updateCurrentUser:(pupil)=>dispatch(actions.updateCurrentUser(pupil))
        }
    }
)(Login)