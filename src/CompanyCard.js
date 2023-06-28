import React from "react";
// import "./CompanyCard.css";  
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

/* Comapny Card displays name and description of a company */
const CompanyCard = ({ name, description, handle }) => {
    return (
        <Link className="CompanyCard" to={`companies/${handle}`}>
            <Card className="CompanyCard">
                <CardBody>
                    <CardText>{handle}</CardText>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Link>
    );
}

export default CompanyCard;