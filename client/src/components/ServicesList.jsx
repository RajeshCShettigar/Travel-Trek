import React from 'react'
import guide from '../assets/images/guide.png';
import weather from '../assets/images/weather.png';
import customization from '../assets/images/customization.png';


const ServicesList = () => {
  return (
    <div class="container px-5 py-20 mx-auto">
    <div class="flex flex-col text-center w-full mb-10">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Services</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-md">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-amber-400 text-white flex-shrink-0">
              <img src={weather} alt="" className="h-full w-full"/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Calculate Weather</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-md">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-amber-400 text-white flex-shrink-0">
            <img src={guide} alt="" className="h-full w-full"/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Best Tour Guide</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-md">
          <div class="flex items-center mb-3">
            <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-amber-400 text-white flex-shrink-0">
            <img src={customization} alt="" className="h-full w-full"/>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Customisation</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServicesList