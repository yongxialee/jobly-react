// import React,{useContext, useState} from "react";
// import { CardBody,Card,Form,Label,Input,FormGroup,Button} from "reactstrap";

// import CurrentUserContext from "./CurrentUserContext";

// const Profile =()=>{
//     // const {curUser,editUser}=useContext(CurrentUserContext);
//     // const [formData,setFormData]=useState({
//     //     firstName:curUser.firstName,
//     //     lastName:curUser.lastName,
//     //     emial:curUser.email
//     // })

//     // const [status,setStatus]=useState("")

//     // const handleChange=(e)=>{
//     //     const {name,value}=e.target;
//     //     setFormData(data=>({...data,[name]:value,}))
//     // }
//     // const handleSubmit=async (e)=>{
//     //     e.preventDefault();
//     //     try{
//     //         const res=await editUser(curUser.username,formData)
//     //         if(res){
//     //             setStatus("scuccess");
//     //         }
//     //     }catch(err){
//     //         setStatus("fail")
//     //     }

            
//     //     }

//         const {curUser, userUpdate} = useContext(CurrentUserContext);
//     const [formData, setFormData] = useState({
//         firstName: curUser.firstName,
//         lastName: curUser.lastName,
//         email: curUser.email
//     });
//     const [status, setStatus] = useState("init");
    
//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setFormData(data => ({
//             ...data,
//             [name]: value,
//         }));
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await userUpdate(curUser.username, formData);
//             if (res) {
//                 setStatus("success");
//             }
//         } catch (error) {
//             setStatus("fail");
//         }
//     }
    
//     return (
//         <section>
//         <div className="container my-3 bg-light">
//             <h1>My Profile</h1>
//             <Card>
//                 <CardBody>
//                     <Form onSubmit={handleSubmit}>
//                     <FormGroup>
//                         <Label htmlFor="username">
//                             Username
//                         </Label>
//                         <Input
//                                         id="username"
//                                         name="username"
//                                         type="text"
//                                         onChange={handleChange}
//                                         placeholder={curUser.username} 
//                                     />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>
//                         Password
//                         </Label>
//                         <Input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         onChange={handleChange}
//                                         // placeholder={curUser.password}

//                                     />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>
//                         First Name
//                         </Label>
//                         <Input
//                                         id="firstName"
//                                         name="firstName"
//                                         type="text"
//                                         // placeholder={curUser.firstName} 
//                                         onChange={handleChange}
//                                     />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>
//                         Last Name
//                         </Label>
//                         <Input
//                                         id="lastName"
//                                         name="lastName"
//                                         type="text"
//                                         // placeholder={curUser.lastName }
//                                         onChange={handleChange}
//                                     />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>
//                         Email
//                         </Label>
//                         <Input
//                                         id="email"
//                                         name="email"
//                                         // type="email"
//                                         // placeholder={curUser.email} 
//                                         onChange={handleChange}
//                                     />
//                     </FormGroup>
//                     <p>
//                                     <Button>Save Changes</Button>
//                                     {status === "success"
//                                     ? <span style={{color: "green", paddingLeft: 20}} >Updated Successfully</span>
//                                     : setStatus === "fail"
//                                     ? <span style={{color: "red", paddingLeft: 20}} >Something went wrong.</span>
//                                     : null}
//                                 </p>
//                     </Form>
//                 </CardBody>
//             </Card>
//             </div>
//         </section>
//     )

// }

// export default Profile;
import React, { useContext, useState } from "react";
import CurrentUserContext from "./CurrentUserContext";
import { Form, Label, Input, Button, FormGroup, Card, CardBody } from "reactstrap";

const EditProfileForm = () => {
    const {curUser, editUser} = useContext(CurrentUserContext);
    const [formData, setFormData] = useState({
        firstName: curUser.firstName,
        lastName: curUser.lastName,
        email: curUser.email
    });
    const [submitStatus, setSubmitStatus] = useState("init");
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await editUser(curUser, formData);
            if (res) {
                setSubmitStatus("success");
            }
        } catch (error) {
            setSubmitStatus("fail");
        }
    }

    return (
        <div className="pt-5">
            <div className="ProfileEditForm">
                <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                    <h2 className="mb-3">Profile</h2>
                    <Card>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        disabled
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder={curUser} 
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={handleChange}
                                        // placeholder={} 
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder={formData.lastName} 
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={handleChange}
                                        placeholder={formData.email} 
                                    />
                                </FormGroup>
                                <p>
                                    <Button>Save Changes</Button>
                                    {submitStatus === "success"
                                    ? <span style={{color: "green", paddingLeft: 20}} >Updated Successfully</span>
                                    : submitStatus === "fail"
                                    ? <span style={{color: "red", paddingLeft: 20}} >Something went wrong.</span>
                                    : null}
                                </p>
                                
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default EditProfileForm;