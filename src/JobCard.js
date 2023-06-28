import React, { useContext,useState,useEffect } from "react";
import { Card,CardBody,CardTitle,Button,CardText } from "reactstrap";
import CurrentUserContext from "./CurrentUserContext";


const JobCard=({title,salary,company,equity,id})=>{
    const {apply,applied} =useContext(CurrentUserContext);
    const [hasApplied, setHasApplied] = useState(false);

    const handleApply=(e)=>{
        e.preventDefault();
        if (applied(id)) return;
        apply(id);
        setHasApplied(true)
    }

    /** Check if already applied and set state of hasApplied */
    useEffect(() => {
        setHasApplied(applied(id));
    }, [applied,id]);

    
    return (
        <Card className="JobCard">
            <CardBody>
                <CardTitle style={{fontWeight: "bold"}}>{title}</CardTitle>
                {company ? <CardText>{company}</CardText> : null}
                {salary && <CardText>Salary: {salary}</CardText>}
                {equity && <CardText>Equity: {equity}</CardText>}
                <Button
                    className="btn btn-danger font-weight-bold text-uppercase float-right "                
                    onClick={handleApply}
                    disabled={hasApplied}
                >
               
                    {hasApplied ? "Applied" : "Apply"}
                </Button>
            </CardBody>
        </Card>
    )
}


export default JobCard;