import React from 'react';
import {format} from 'date-fns';

export default function Images(props) {
  return (
    <>
    <article className='shadow-md bg-white rounded-3xl p-5'>
    <img src={props.urls.full} alt={props.user.name} loading='lazy' 
    className='h-52 w-full object-cover rounded-3xl md:h-80' />
    
  <div className='flex flex-wrap items-center justify-between'>
  <div className='pt-3 flex items-center justify-start'>

  <img src={props.user.profile_image.large} alt={props.user.name}
   className='w-20 rounded-full shadow'/>

   <ul className='ml-3'>
   <li className='font-bold text-slate-800 mb-1'>{props.user.name}</li>
   <li className='text-slate-600 text-sm'>{format(new Date(props.created_at), 'dd MMMM yyyy')}</li>
   </ul>
   
  </div>

<div>
<ul className='text-slate-600 text-sm text-right'>
<li className='underline'> 
<a href={`http://instagram.com/${props.user.instagram_username}`}></a>Instagram</li>
<li>{props.likes} Likes</li>
</ul>
</div>
  </div>
</article>
 </>
  )
}