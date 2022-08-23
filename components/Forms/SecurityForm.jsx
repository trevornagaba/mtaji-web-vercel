import React,{useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { getToken } from "../../utils/getToken";
import axios from "axios";

const SecurityForm = ({userId}) => {
    const [data, setData]= useState({
        password:'',
        cpassword:''
    })
    const [sending, setSending] = useState(false)
    const [showAlert, setShowAlert] = useState(false);

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
            return alert('passwords are not equal')
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
            console.log(res)
            setSending(false)
            setShowAlert(false)
            res && res.status == 200 ? setShowAlert(true): setShowAlert(false)
        }
        ).catch(e=>{
            console.log(e)
            setSending(false)
            setShowAlert('error')
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
          {showAlert && <FlashMessage message={showAlert =='error'?'error occurred' : 'Update successful'} type={'success'}/>}
        </div>
    );
};

export default SecurityForm;
