import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props.course);
    const {img,course_title,author_name,price} =props.course;
   
    return (
        <div className="course">
            <div>
                <img className="image_name" src={props.course.img}  alt=""/>
            </div>
            <div ClassName="course_details">
                <h2>{course_title}</h2>
        	     <p>Instructor: {author_name}</p>
                <p>Course Fee: {price} BDT.</p>
                <br/>
                <button className="main-button"
                     onClick ={() =>props.handleAddCourse(props.course)}            
                     >Enroll Now
                </button>
            </div>
        
             
           
        </div>
    );
};

export default Course;