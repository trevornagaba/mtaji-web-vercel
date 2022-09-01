import React,{useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { getToken } from "../../utils/getToken";
import axios from "axios";
import FlashMessage from "../Alert/FlashMessage";
import useSetAlert from "../../hooks/useSetAlert";

const SecurityForm = ({userId}) => {
    const {setAlert} =  useSetAlert()
    const [data, setData]= useState({
        password:'',
        cpassword:''
    })
    const [sending, setSending] = useState(false)

    const handleChange = (e)=>{
        e.preventDefault()
        const {name, value} = e.target
        setData((data)=>{
            return {
                ...data, 
                [name]: value
            }
        }
        )
    }
    const handleSubmit =()=>{
        console.log(userId)
        console.log(data[0])
        if (data.password != data.cpassword){
            return setAlert("warning", "passwords are not equal")
        }
        setSending(true)
        const token = getToken()
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'Application/json',
            }
        }
        axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userId}`,
        {password: data.password},
        config).then((res)=>{
            setSending(false)
            res && res.status == 200 ? setAlert("success", "Update Password Successful"): setAlert("warning", "Update Password Unsuccessful")
        }
        ).catch(e=>{
            setSending(false)
            setAlert("warning", "An error occurred")
        })
    }
    return (
        <div className="ml-5">
          <p className="text-lg font-medium">Reset Password</p>
          <div className="w-full mt-10">
              <TextInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value = {data?.password}
                onChange={handleChange}
              />
          </div>
          <div className="w-full">
              <TextInput
                  label="Confirm Password"
                  name="cpassword"
                  type="password"
                  placeholder="Confirm Password"
                  value = {data?.cpassword}
                  onChange={handleChange}
              />
          </div>
          <div className="mt-10 flex w-full justify-center">
            <Button primary onClick={handleSubmit}>{
                    sending ? 'Updating': 'Update Password'
                }</Button>
          </div>
          
        </div>
    );
};

export default SecurityForm;
