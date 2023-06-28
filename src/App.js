
import React, { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import RouteList from "./Routes";
import CurrentUserContext from "./CurrentUserContext";
import JoblyApi from "./api";
import jwtDecode from "jwt-decode";

function App() {
   
   const [token,setToken]=useState(null);
   const [curUser,setCurUser]=useState(null);
   const history=useHistory();
   const [jobApps, setJobApps] = useState(new Set([]));



/**check local storage to keep track of token */
   useEffect(()=>{
    const userToken=localStorage.getItem("jobToken");
    console.log("useEffect is Running");
    console.log(curUser)
    if (userToken && !curUser) {
      try {
          getUserInfo(userToken);
      } catch (error) {
          console.log(error);
      }
      
  }
}, []);
  /**register/signup function*/
   async function register(formData){
    try{
      const response = await JoblyApi.register(formData);
      setToken(response);
      //resign token 
      JoblyApi.token=response;
      const {username,password,email,firstName,lastName}=formData;
      setCurUser(formData);
      console.log(token)
      localStorage.setItem("jobToken",response)
      history.push('/')
    }catch(err){
      console.log(err)
      
    }
  }

  /**login function */
  async function login(username,password){
    try {
      const response = await JoblyApi.login(username,password);
      setToken(response);
      setCurUser(username)
      JoblyApi.token=response;
      localStorage.getItem("jobToken",response)
      history.push("/");


    }catch(err){
      console.log(err)
      throw err;

    }
  }
  /**logout a user */
  async function logout(){
    setCurUser(null);
    setToken(null);
    localStorage.removeItem("jobToken")
    history.push("/logout")
  }

   /** edit a user's profile */
   const editUser = async (username, formData) => {
    try {
        await JoblyApi.profileUpdate(username, formData);
        setCurUser({
            ...curUser,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        });
        return true;
    } catch (error) {
        throw error;
    }
  }
    

  
  async function getUserInfo (token) {
    try {
        setToken(token);
        JoblyApi.token = token;
        const {username} = jwtDecode(token);
        const res = await JoblyApi.getCurrentUser(username);
        setCurUser(res);
    } catch (error) {
        console.log(error);
    }
  }


  /** Apply to a job, update jobApps */
  const apply = async (id) => {
      try {
          await JoblyApi.apply(curUser.username, id);
      } catch (error) {
          console.log(error);
      }
      const newSet = new Set([id]);
      console.log(newSet)
      setJobApps(new Set([...jobApps, id]));
  }
  const applied = (id) => {
    if (jobApps.has(id)) return true;
  }
  

  return (
    <div className="App" >
    <CurrentUserContext.Provider value={{register,login,logout,curUser,editUser,apply,applied}}>
      {/* <BrowserRouter> */}
      
        <NavBar />
        <RouteList />
      {/* </BrowserRouter> */}
      </CurrentUserContext.Provider>
     
     
    </div>
  );
}

export default App;
