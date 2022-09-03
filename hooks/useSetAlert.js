import React, { useContext } from "react"
import {AppContext} from "../components/AppContext"

const useSetAlert = ()=>{
    const {setAlerts, setShowModal, setShowAlert} = useContext(AppContext)
    const setAlert =(variant, title, text)=>{
        setShowAlert(true)
        setShowModal(false)
        setAlerts({variant, text, title})
    }
    return {setAlert}
}
export default useSetAlert