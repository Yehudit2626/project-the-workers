import produce from 'immer'
import createReducer from '../reducerUtils'

const initialState = {
    employes: [],
    currentUser:null,
    isManager:false
}
const employedFunctions = {
    
    updateCurrentUser(state, action) 
    {
        state.currentUser=(action.payload.currentUser)
        state.isManager=(action.payload.isManager)
        fetch('http://localhost:3010/getAllEmployed', { method: 'GET' })
            .then((response) => {
                return response.json()
            })
            .then((result)=>{
                state.employes=result.employes
            })
    }
    
}
const reducer = produce((state, action) => {
    createReducer(state, action, employedFunctions)
}, initialState)

export default reducer;