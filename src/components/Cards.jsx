import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
    let courseData=props.courses;
    let array=[];
    function getCourses()
    {
        Object.values(courseData).forEach(element => {
          element.forEach(value =>{
            array.push(value);
          })
        });
        return array;
    }

  const [likedCourse,setlikedCourse]=useState([]);
  return (
    <div className='flex flex-wrap justify-center gap-5 mb-4 mx-28'>
    {
        getCourses().map((course) =>  <Card key={course.id} course={course} likedCourse={likedCourse} setlikedCourse={setlikedCourse}></Card>)
    }
    </div>
  )
}

export default Cards
