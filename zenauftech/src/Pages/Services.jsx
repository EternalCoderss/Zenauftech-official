import React from 'react'

const Services = () => {
  return (
    <div className="mt-32 px-4">
      <h1 className="text-4xl font-bold text-center">Our Services</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Digital Marketing</h2>
          <p className="mt-2">Comprehensive digital marketing solutions to grow your business.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Web Development</h2>
          <p className="mt-2">Custom web development services tailored to your needs.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">SEO Optimization</h2>
          <p className="mt-2">Improve your search engine rankings and online visibility.</p>
        </div>
      </div>
    </div>
  )
}

export default Services