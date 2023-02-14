import React from 'react'
import gallerydata from '../assets/data/gallerydata'

const ImageGallery = () => {
  return (
    <>
    <div className="masonry sm:masonry-sm md:masonry-md m-4 bg-gradient-to-r from-slate-300 to-slate-500 p-3 rounded-lg hover:">
      {gallerydata.map((image, index) => (
        <div key={index} className="rounded-lg break-inside">
          <img src={image} alt="" className="h-full w-full border-gray-200 border-1 hover:scale-105 rounded-lg"/>
        </div>
      ))}
    </div>
    </>
  )
}

export default ImageGallery