import React from 'react'
import { Button } from 'react-bootstrap'

const Head = () => {
  return (
    <>
    
    
<div className='p-2 flex items-center justify-between m'>
<div className=''><img src='unnamed1.png' className='  rounded-full h-16 mr-10 lg:h-32  sm:h-16   md:h-24'  />
</div>

<div ><h4 className='text-white text-base sm:text-sm md:text-lg  lg:text-2xl'>Abubakar alnour</h4></div>
<div class="grid grid-cols-4 gap-1    " >
 <a href='https://github.com/abubakaralnour' target="_blank"> <img src='git.png'     className='rounded-full h-6 md:h-12 lg: h-12'/></a>
 <a href='https://www.linkedin.com/in/abubakar-alnour-866b54318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'target="_blank"> <img src='linkdn.png'  className='rounded-full h-6 md:h-12 lg: h-12'/></a>
 <a href='mailto:abubakaralnour43@gmail.com'> <img src='gmail.png'   className='rounded-full h-6 md:h-12 lg: h-12'/></a>
 <a href=' https://wa.me/0544854061' target="_blank"> <img src='whats.png'   className='rounded-full h-6 md:h-12 lg: h-12'/></a>
<span class="relative flex h-2 w-2  ">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full bg-sky-500        "></span>
</span>

</div>



</div>
<div style={{textAlign:"center" ,color:"rgb(194, 191, 182)"}}
 > 
 <h6> Hello how it's going  <span className='dots  '></span> </h6></div>
 
<div className='pl-8 text-sm h-16'  id='icon-container' >
<a href='Abubakar_Front_End_CV.pdf'
  download={'Abubakar_Front_End_CV.pdf'} >
   <img src='download (2).png'
 id='trembling-icon'  
 className='h-4 w-6  text-lg  md:h-6 w-8   lg:h-6 w-8    xl:h-6 w-8    2xl:h-6 w-8  ' /> 
   My cv  </a> </div>
 
    </>
  )
}

export default Head