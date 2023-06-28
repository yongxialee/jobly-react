import React, { useContext } from "react";
import { Button } from "reactstrap";
import CurrentUserContext from "./CurrentUserContext";


const Home =()=>{
   const {curUser}=useContext(CurrentUserContext);
   
        return (
         <section style={{margin:200}}>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            
            {curUser?<h2>Welcome back,{curUser}</h2>:
            <div className="col-md-12 text-center">
            <a href="/login">
              <Button>Login</Button></a>

              <a href="/signup">
              <Button>Signup</Button></a>
              </div>
              }
          
           </section>
        )
 
    }

export default Home;