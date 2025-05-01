import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import baseURL from "../baseURL";
import { toast } from "react-toastify";


const AddCourse = () => {

    useEffect(()=>{
        document.title= "Add Course";
    }, []);

    //Form Handler for submit
    const[course, setCourse] = useState({});

    const formHandler = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault()
    };

    //function to call post api from boot
    const postDataToServer = (data) => {
        axios.post(`${baseURL}`, data).then(
            (res) => {
                console.log(res);
                console.log("success");
                toast.success("Course added successfully");
            },
            (err) => {
                console.log(err);
                console.log("error");
                toast.error("Something went wrong");
            }
        );
    };

    return(
        <>
        <h1 className="text-center my-3">Fill Course Detail</h1>
        
        <Form onSubmit={formHandler}>

            <FormGroup>
                <label for="userId">Course Id</label>
                <Input type="text" placeholder="Enter Course id here" name="userId" id="userId" 
                onChange={(e) => {
                setCourse({...course, id: e.target.value});
                 }}
                />
            </FormGroup>

            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" placeholder="Enter title here" id="title" 
                onChange={(e) => {setCourse({...course, title: e.target.value});
              }}
                />
            </FormGroup>

            <FormGroup>
                <label for="description">Course Description</label>
                <Input type="textarea" placeholder="Enter description here" id="description"
                style={{height:150}} 
                onChange={(e) => {setCourse({...course, description: e.target.value});
                }}
                />
            </FormGroup>

            <Container className="text-center">
                <Button type="submit" color="success">Add Course</Button>
                <Button type="reset" color="warning ml-2">Clear</Button>
            </Container>

        </Form>
        </>
    )
}
export default AddCourse;