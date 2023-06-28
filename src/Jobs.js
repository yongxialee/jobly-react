import React,{useState,useEffect} from "react";
import {Button, Card,CardBody,CardColumns,CardText,CardTitle, CardSubtitle,ListGroup,ListGroupItem} from "reactstrap";

import JoblyApi from "./api";




const Jobs =()=>{
    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        async function getAllJobs(){

      
        let jobs = await JoblyApi.getJobs();
        // console.log(jobs)
        setJobs(jobs)
    }
    getAllJobs();
    },[])

    
    return (
      <section>
         <Card>
      
     
        <CardBody>
        {jobs.map((j)=>{
        console.log(j)
            return (
                <Card>
                <CardTitle>{j.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6"
                >
                {j.companyName}
                </CardSubtitle>
                <CardColumns>
                <CardText>Salary:{j.salary}</CardText>
                <CardText>Equity:{j.equity}</CardText>
               <CardText> <Button color="danger">Apply</Button></CardText>
               </CardColumns>
                </Card>
            )
        })}
        </CardBody>
        
     
        </Card> 
      
        
   
      </section>
      

    )
}

export default Jobs;