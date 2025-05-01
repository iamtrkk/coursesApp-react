import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";  
import { toast} from "react-toastify";
import baseURL from "../baseURL";

const Allcourses = () => {

    useEffect(()=> {
        document.title= "All Courses"
    }, []);

    // API hit to backend Spring
    const getAllCourse = () => {
        axios.get(`${baseURL}`).then(
            (response) => {
                console.log(response.data);
                toast.success("Courses has been loaded");
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };
    // calling function to load course
    useEffect(()=> {
        getAllCourse();
    }, []);

    const [courses, setCourses] = useState([

        // {title: "Java Course", description: "this is java demo"},
        // {title: "CPP Course",  description: "this is CPP demo"},
        // {title: "React Course", description: "this is React demo"},
    ])

    //Remove COurse after delete
    const updateAfterDelete = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    };

    return (
        <div className="text-center">
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {
            courses.length > 0? 
            courses.map((item) => (
            <Course key={item.id} course={item} update = {updateAfterDelete} />
            )) :"No courses"
            }

        </div>
    )

}
export default Allcourses;