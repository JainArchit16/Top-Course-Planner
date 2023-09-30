import React from 'react'

const Filter = (props) => {
  function handleClick(id)
  {
      // console.log(id);
      if(props.category!==id)
      {
          props.setCategory(id);
      }
  }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center '>
    {
      props.filterData.map((data) => <button key={data.id} onClick={() => handleClick(data.title)} 
      className={`p-4 text-white font-bold bg-bgDark m-2 rounded-lg
      ${data.title===props.category
      ?"opacity-100 border-white"
      :"opacity-60 border-transparent"}
      `}>
      {data.title}
      </button>)
    }
    </div>
  )
}

export default Filter
