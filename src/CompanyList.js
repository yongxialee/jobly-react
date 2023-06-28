import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { CardColumns} from "reactstrap";
import JoblyApi from "./api";
import "./Companies.css"
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

const CompanyList =()=>{
   
   const [companies,setComapnies]=useState([]); 
   const [isLoading, setIsLoading] = useState(true);
  //  const [company,setCompany]=useState("")
    
     useEffect(()=>{
         async function getCompanies(){
             let companies=await JoblyApi.getAllCompanies();
             console.log("useeffect is running")
            
             setComapnies(companies);
             setIsLoading(false)
             
         }
         getCompanies();
     },[ ]);
     async function searchCompanies(searchTerm){
      
      let  response;
      if(searchTerm===""){
        response=await JoblyApi.getAllCompanies();
      }
      response=await JoblyApi.searchCompanies(searchTerm);
      setComapnies(response);
      setIsLoading(false)
     
     }


if(isLoading){
  return <p>Loading...</p>
}

    return (
    
        <section>
          <SearchForm searchFunc={searchCompanies}/>
          <CardColumns>
            {companies?.map(c=>(
              <CompanyCard name={c.name} description={c.description} hamdle={c.handle} key={c.id} id={c.id}/>
            ))}
          </CardColumns>
        </section>

   
    )
        }
    
export default CompanyList;