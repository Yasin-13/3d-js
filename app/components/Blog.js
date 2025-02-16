import Link from 'next/link';
import { FaUniversity } from 'react-icons/fa';
import React from 'react';

export default function Blog() {
  return (
    <section className="bg-white h-screen flex flex-col">
      <header className="bg-white border-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-5 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between animate-fade-in-down">
            <div className='flex items-center gap-4'>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl flex items-center">
                <FaUniversity className="mr-2 text-red-500" />
                Information Kiosk
              </h1>
            </div>
            <p className="mt-1.5 text-xl text-gray-500">
              Your ultimate guide to navigating college life effortlessly
            </p>
          </div>
        </div>
      </header>
      <div 
        className="h-screen flex-1 flex items-center justify-center bg-cover bg-center animate-fade-in" 
        style={{ backgroundImage: 'url(c.jpg)', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center'
         }}
      >
        <div className="text-center px-4 py-13 bg-white bg-opacity-0 rounded-lg animate-fade-in-up">
          <h1 className="text-4xl py-19 text-nowrap font-extrabold sm:text-5xl">
            Explore Your Campus with Confidence
            <strong className="font-extrabold text-red-700 sm:block">Navigate Effortlessly with Information kiosk.</strong>
          </h1>
          <p className="mt-4 font-bold text-lg sm:text-xl">
            UniMapNavigator is your go-to tool for discovering every corner of your campus. Find classrooms, libraries, cafes, and more with ease, ensuring you never get lost again.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-20">
          <a
  className="block w-full rounded bg-red-600 px-16 py-4 text-2xl font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
  href="/apsit.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  College Info
</a>

            <a
              className="block w-full rounded bg-red-600 px-16 py-4 text-2xl font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/Cultural"
            >
              Cultural Events
            </a>
            <a
              className="block w-full rounded bg-red-600 px-16 py-4 text-2xl font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/Technical"
            >
              Technical Events
            </a>
          </div>
          <div className='mt-8 flex flex-wrap justify-center gap-4'>        <a
              className="block w-full rounded bg-red-600 px-16 py-4 text-2xl font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/Map"
            >
              Campus Map
            </a>
            </div>
  
        </div>
      </div>
    </section>
  );
}