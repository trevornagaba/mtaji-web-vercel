import React, { useContext } from "react"
import {AppContext} from "../components/AppContext"

const useSetAlert = ()=>{
    const {setAlerts, setShowModal} = useContext(AppContext)
    const setAlert =(variant, text)=>{
        // setShowModal(false)
        setAlerts({variant, text})
        setShowModal(true)
    }
    return {setAlert}
}
export default useSetAlert