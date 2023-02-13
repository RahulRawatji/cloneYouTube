import React from 'react'

import Button from './Button'

const ButtonList = () => {
    const tags = ["All","Mixes","News","Music","Computer Programming","Gaming","Stats","AI","Server","Live","Superhero Movie","Sports","Technology","Anime","Bhajan","Tourism"]
  return (
    <div className='flex gap-5 w-full scroll-auto overflow-x-scroll scrollbar-hide mx-1 py-3' >
        {tags.map(tag=><Button key={tag} name={tag}/>)}
    </div>
  )
}

export default ButtonList