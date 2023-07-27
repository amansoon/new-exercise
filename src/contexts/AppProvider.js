import { useEffect, useReducer, useState } from "react"
import { appContext } from "./appContext"
import { getJobs } from "../mutations"
import reducer from './reducer'


const initialState = {
    isPopup: false,
    isEditing: false,
    step: 0,
    jobs: [],
    data: null,
}

const initialFormData = {
    
}


function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {isPopup, isEditing, step, jobs, data} = state;

    useEffect(() => {
        (async function () {
            const res = await getJobs()
            console.log(res)
            if (res.status === 200) {
                console.log('hi')
                dispatch({type: 'SET_JOBS', payload: res.data})
            }
            else {
                console.log(res.statusText)
            }
        })()
    }, [])

    useEffect(() => {
        console.log("state", state)
    }, [state])

    return (
        <appContext.Provider value={{ isPopup, isEditing, step, data, jobs, dispatch}}>
            {children}
        </appContext.Provider>
    )
}

export default AppProvider