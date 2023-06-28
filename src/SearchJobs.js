import React,{useState} from "react";
import {Row,Button,Label,Form,Input,Col} from "reactstrap"




const SearchJobs =({searchFunc})=>{
    const [formData,setFormData]=useState({title:""})
    const handleSubmit=(e)=>{
        e.preventDefault();
        // const {}=formData;
        try{
             searchFunc(formData.title);
            
        }catch(e){
            console.log(e)
        }

    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(data=>({...data,[name]:value}))
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
                <Label
                    className="visually-hidden"
                        for="search"
                >
                Search
                </Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="Enter search term"
                    type="text"
                    onChange={handleChange}
                />
            </Col>
            <Col>
     
            <Button className="btn btn-primary font-weight-bold text-uppercase float-right" >
                Submit
            </Button>
            </Col>
            </Row>
        </Form>
    )

}

export default SearchJobs;