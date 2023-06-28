import React, { useContext, useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";
import {
  CardBody,Form,FormGroup,Label,Input,Button} from "reactstrap";




const LoginForm=()=> {
  const INTIAL_STATE={
    username:"",
    password:""
  };
  const {login}=useContext(CurrentUserContext)
  const [formData,setFormData]=useState(INTIAL_STATE);
  const [invalidLogin,setInvalidLogin]=useState(false)

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const {username,password}=formData;
    try{
      await login(username,password);
      setInvalidLogin(false)
      console.log("log in")
    }catch(err){
      if(err[0]==="Invalid username/password"){
        setInvalidLogin(true)
      }
    }

    
  }


  const handleChange=(e)=>{
    const {name,value}=e.target;
   setFormData(data=>({...data,[name]:value}))
   
  }



  return (
   
    <div className="container my-3 bg-light">
        <h1>Login</h1>
        <CardBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">
                        Username
                    </Label>
                    <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={handleChange}
                                    // value={}
                                />
                </FormGroup>
                <FormGroup>
                    <Label>
                    Password
                    </Label>
                    <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    // value={}

                                />
                </FormGroup>
                
                <Button className="btn btn-primary col-md-5 text-center" >Login</Button>
            {invalidLogin? <span style={{color:"red"}}>Invalid Username/Password</span>:null}
            </Form>
        </CardBody>
        </div>

)
}

export default LoginForm;