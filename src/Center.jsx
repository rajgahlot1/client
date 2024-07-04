import React from 'react'
import vid from './post/VID-20240616-WA0001.mp4'
import Following from './Following'
const Center = () => {
  return (
    <div className='center d-flex flex-column align-items-center' style={{zIndex:"10"}}>
 <Following />
<video width="468"  autoPlay>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      ddfd
       
<video width="468"  autoPlay>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
    </div>
  )
}

export default Center