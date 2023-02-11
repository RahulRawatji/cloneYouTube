import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-gray-100 px-4 whitespace-nowrap rounded py-1 cursor-pointer '>
        {name}
    </div>
  )
}

export default Button