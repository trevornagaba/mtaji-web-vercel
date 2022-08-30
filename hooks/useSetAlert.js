import { useContext } from "react"
import AppContext from "../components/AppContext"

export const useSetAlert = ()=>{
    const {alerts, setAlerts} = useContext(AppContext)
    const setAlert =(variant, text)=>{
        setAlerts({variant, text})
    }
}