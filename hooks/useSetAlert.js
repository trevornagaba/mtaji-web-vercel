import React, { useContext } from "react"
import {AppContext} from "../components/AppContext"

const useSetAlert = ()=>{
    const {setAlerts, setShowModal} = useContext(AppContext)
    const setAlert =(variant, text)=>{
        setAlerts({variant, text})
        setShowModal(true)
    }
    return {setAlert}
}
export default useSetAlert