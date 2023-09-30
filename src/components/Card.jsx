import React from 'react'
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
const Card = (props) => {
  let course=props.course;
  let like=props.likedCourse;
  let setLike=props.setlikedCourse;

  function handleLike()
  {
      if(like.includes(course.id))
      {
        setLike((prev) => prev.filter((cid) => cid !== props.course.id));
        toast.warning("Like Removed");
      }
      else
      {
        setLike((prev) => [...prev, props.course.id]);
        toast.success("Liked Succesfully");
      }
  }

  return (
    <div className='bg-bgDark bg-opacity-80 w-[350px] rounded-md overflow-hidden'>
      <div className='relative'>
            <img src={course.image.url} alt={course.image.alt}></img>
            <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[0px] grid place-items-center absolute'>
              <span onClick={handleLike}>
                  {
                    like.includes(course.id)?<FcLike></FcLike>:<FcLikePlaceholder></FcLikePlaceholder>
                  }
              </span>
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
