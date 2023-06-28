import React,{useState} from "react";
import {Row,Button,Label,Form,Input,Col} from "reactstrap"



const SearchForm =({searchFunc})=>{
    const [formData,setFormData]=useState({name:""})
    const handleSubmit=(e)=>{
        e.preventDefault();
        // const {name}=formData;
        try{
             searchFunc(formData.name);
            
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
                    id="name"
                    name="name"
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

export default SearchForm;