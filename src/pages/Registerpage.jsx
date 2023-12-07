import React, {useState} from 'react'
import { registerApi } from '../apis/Api'
import { toast } from 'react-toastify'

const RegisterPage = () => {
    //* step 1: create a state variable
    const [firstName, setFirstName] =  useState('')
    const [lastName, setLastName] =  useState('')
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')

    //* step 2: create a function fro changing the state variable
    const changeFirstName =(e) => {
        setFirstName(e.target.value)
    }

    const changeLastName = (e) => {
        setLastName(e.target.value)
    }

    const changeEmail = (e) => {setEmail(e.target.value)}
    const changePassword = (e) => {setPassword(e.target.value)}

    //* After clicking the submit button
    const handleSubmit =(e) => {
        e.preventDefault()

        //? step 1: check data in console
        console.log(firstName, lastName, email, password);

        //? creating json data(fieldName)
        const data = {
            firstName : firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        // send data to backend
        registerApi(data).then((res)=>{
            if(res.data.success === true){
                toast.success(res.data.message)
            }else{
                toast.error(res.data.message)
            }
        }).catch((err)=>{
            toast.error("Internal server error")
        })
    }
  return (
    <>
        <h1 className='m-3'> Create an Account</h1>
        <form className='m-3 w-25'>
            <label> First name</label>
            <input onChange={changeFirstName} className='form-control mb-2' type='text' placeholder='enter your fname'></input>
            <label> Last name</label>
            <input onChange={changeLastName} className='form-control mb-2' type='text' placeholder='enter your lname'></input>
            <label> Email </label>
            <input onChange={changeEmail} className='form-control mb-2' type='text' placeholder='enter your ename'></input>
            <label> Password</label>
            <input onChange={changePassword} className='form-control mb-2' type='text' placeholder='enter your password'></input>

            <button onClick={handleSubmit} className='btn btn-danger w-100'>Submit</button>
            <a href='' className='text-decoration-name text-black'>Already have account</a>
        </form>
    </>
  )
}

export default RegisterPage