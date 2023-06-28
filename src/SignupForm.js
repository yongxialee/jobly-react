import React, { useContext, useState } from "react";
import "./SignupForm.css"
import { Form,Label,Input,CardBody,Button, FormGroup } from "reactstrap";
import CurrentUserContext from "./CurrentUserContext";
const SignupForm =()=>{
    const INITIAL_STATE={
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    };

    const {register}=useContext(CurrentUserContext);
    const [dupUser,setDupUser]=useState(false);
    const [formData,setFormData]=useState(INITIAL_STATE)

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(formData=>({...formData,[name]:value}))
        console.log(formData)
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await register(formData);
            // setFormData(response)
        }catch(err){
            if(err[0].includes("Duplicate username")){
                
                setDupUser(true)
                debugger;
              }
            
        }
        // alert(`created user ${formData.username}`)
        // setFormData(INITIAL_STATE)
        
    }



    return (
        <section>
        <div className="container my-3 bg-light">
            <h1>Sign Up</h1>
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
                                        value={formData.username}
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
                                        value={formData.password}

                                    />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                        First Name
                        </Label>
                        <Input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                        Last Name
                        </Label>
                        <Input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                        Email
                        </Label>
                        <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                    </FormGroup>
                    {/* <Button className="btn btn-primary col-md-5 text-center">Sign up</Button>
                    {dupUser?
                    <span style={{color:"red"}}>Username {formData.username} already exists</span>
                    :null} */}
                    <p>
                                    <Button>Submit</Button>
                                    {dupUser
                                    ? <p className="alert alert-danger">Username {formData.username} already in use</p>
                                    : null}
                                </p>
                </Form>
            </CardBody>
            </div>
        </section>
    )
}

export default SignupForm;