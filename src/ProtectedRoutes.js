import React, { useContext } from "react";
import { Route,Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CurrentUserContext from "./CurrentUserContext";

const ProtectedRoutes=({exact,path,children})=>{
    const {curUser}=useContext(CurrentUserContext);

    if(!curUser){
        return <Redirect to={'/login'} />
    }
    return (
        <Route 
        path={path}
        exact={exact}>

        {children}
        </Route>

         
    )
}


export default ProtectedRoutes;