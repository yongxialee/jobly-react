import React,{useEffect, useState} from "react";
import JoblyApi from "./api";
import { CardColumns } from "reactstrap";

import { v4 as uuid } from 'uuid';
import JobCard from "./JobCard";
import SearchJobs from "./SearchJobs";



const JobList =()=>{

    const [jobs,setJobs]=useState([]);
    const [isLoading,setIsLoading]=useState(true)
    


    useEffect(()=>{
        async function fetchJobs(){
            const res = await JoblyApi.getAllJobs();
            setJobs(res);
            setIsLoading(false);

        }
        fetchJobs()
    },[]);

    const searchJobs=async (searchTerm)=>{
   
        let res;
        if(searchTerm===""){
            res= await JoblyApi.getAllJobs();
           

        }else{
            res= await JoblyApi.searchJobs(searchTerm);
        }
        
        setJobs(res);
    
    }
   
    if(isLoading){
        return <p>Loading ...</p>
    }
    return (
        <div>
            <SearchJobs searchFunc={searchJobs}/>
            <CardColumns>
                {jobs?.map(j=>(
                    <JobCard 
                        title={j.title} 
                        company={j.title}
                        salary={j.salary}
                        equity={j.equity}
                        id={j.id}
                        key={uuid()} />
                ))}
            </CardColumns>

        </div>
    
    )


}

export default JobList;
