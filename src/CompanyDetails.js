import React, { useEffect,useState } from "react";
import {Card, CardColumns, CardTitle} from "reactstrap"
import {useParams} from "react-router-dom";
import JoblyApi from "./api";
// import JobCard from "./JobCard";
import JobCard from "./JobCard";



const CompanyDetails =()=>{
    let {handle} =useParams();
    console.log(handle)
    const [isLoading,setIsLoading]=useState(true)
    const [company,setCompany]=useState(null);
    const [jobs,setJobs]=useState([])
   
   

    useEffect(()=>{
        async function fetchCompany(){
            try{
                let res = await JoblyApi.getCompany(handle)
                console.log(res)
                setCompany(res)
                setJobs(res.jobs);
                setIsLoading(false)

            }catch(e){
                console.log(e)
            }
        }
        fetchCompany();
    },[handle])

    if(isLoading){
        return <p>Loading ...</p>
    }

    return (
        <section>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            {/* <CardColumns>
            {jobs?.map(j=>(<JobCard 
                        title={j.title}
                        salary={j.salary}
                        equity={j.equity}
                        id={j.id} /> ))}
           
            </CardColumns> */}
        </section>
    )

}

export default CompanyDetails;