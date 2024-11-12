import React from 'react'

const NewsCard = ({title, description, src, url}) => {
  return (
    <>
    
    <div className="card relative align-middle overflow-x-hidden left-48 top-20 shadow-lg rounded-lg bg-zinc-900 text-light mb-5 my-3 mx-3 px-2 py-2" style={{maxWidth:"375px", height:"65vh",display:"inline-block",justifyContent:"center"}}>
      <div className="shado shadow-lg shadow-slate-800 bg-slate-500 rounded-lg">
              <img src={src} className='h-52 ' alt="loading..." style={{maxWidth:"360px"}} />
              <h5 className='text-white font-bold'>{title }</h5></div>
              <p className='text-white'>{ description }</p>
              <a href={url} className='btn bg-sky-500 p-3 rounded-lg relative top-6'>Read More</a>
  
            </div>
    
    
    
    
    
    
    </>
  )
}

export default NewsCard
