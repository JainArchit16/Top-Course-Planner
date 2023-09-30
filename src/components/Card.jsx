import React from 'react'
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
const Card = (props) => {
  let course=props.course;
  return (
    <div className='bg-bgDark bg-opacity-80 w-[350px] rounded-md overflow-hidden'>
      <div className='relative'>
            <img src={course.image.url} alt={course.image.alt}></img>
            <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-0px] grid place-items-center absolute'>
              <FcLike></FcLike>
            </div>
      </div>
      <p className='font-bold text-white p-3'>{course.title}</p>
      <p className='text-white p-3'>
      {
        props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
      }
      </p>
    </div>
  )
}

export default Card