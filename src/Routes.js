import React from "react";
import "./App.css";
import Home from "./Home";

import { Route, Switch,Redirect,Router } from "react-router-dom";
import Login from "./Login";
import JobList from "./JobList";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./CompanyList";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import ProtectedRoutes from "./ProtectedRoutes";




function RouteList() {

    
   return (
     <div >
       
           <Switch>
             <Route exact path="/" >
              <Home  />
             </Route>
             <Route exact path="/login">
               <Login  />
             </Route>
             <Route exact path="/signup">
               <SignupForm  />
             </Route>
             
             <ProtectedRoutes exact path="/Companies">
               <CompanyList  />
             </ProtectedRoutes>
             <ProtectedRoutes exact path="/companies/:handle">
             {/* <Router path=":handle" element={<CompanyDetails />} ></Router> */}
             {/* <Route path="" element={<CompanyDetails />} ></Route> */}
             <CompanyDetails />
               
             </ProtectedRoutes>
             <ProtectedRoutes exact path="/jobs">
               <JobList  />
             </ProtectedRoutes>
             <ProtectedRoutes exact path="/profile">
               <ProfileForm  />
             </ProtectedRoutes>
             
             
             <Redirect to ="/" />
                      
           </Switch>
            
     </div>
   );
 }
 export default RouteList;