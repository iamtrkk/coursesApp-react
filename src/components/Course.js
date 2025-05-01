import axios from "axios";
import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import baseURL from "../baseURL";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${baseURL}/${id}`).then(
            (res) => {
                toast.success("Course removed");
                update(id);
            },
            (error) => {
                toast.error("Course not removed || Something went wrong");
            }
        );
    };

    return (
        <Card>
            <CardBody className="text-center">
                    <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">

                    <Button onClick={() => {
                        deleteCourse(course.id);
                    }} 
                    color="danger">Delete</Button>

                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Course;