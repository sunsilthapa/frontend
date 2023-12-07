import React, { useState } from "react";
import { toast } from 'react-toastify';
import { loginApi } from "../apis/Api";

const LoginPage = () => {
  //make useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    const data = {
      email: email,
      password: password,
    };

  
    //api call
    loginApi(data).then((res)=>{

      if(res.data.success === false){
        toast.error(res.data.message)
      }else{
        toast.success(res.data.message)

        //set token and user data in local storage
        localStorage.setItem("token", res.data.token)
      
        //Converting incoming json
        const convertedJson = JSON.stringify(res.data.userData)
        localStorage.setItem("user", convertedJson)
      }

    }).catch((err) => {
      console.log(err)
      toast.error("Server Error!")
    })

  };
  return (
    <>
      <h1 className="m-3">Sign in to your account!</h1>
      <form className="m-3 w-25">
        <label className="fw-bold">E-mail</label>
        <input
          onChange={changeEmail}
          className="form-control mb-2"
          type="email"
          placeholder="Enter your Email"
        ></input>

        <label className="fw-bold">Password</label>
        <input
          onChange={changePassword}
          className="form-control mb-2"
          type="password"
          placeholder="Enter your password"
        ></input>

        <button onClick={handleSubmit} className="btn btn-danger w-100 mt-3">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
