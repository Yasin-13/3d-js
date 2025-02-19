import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const CollegeEventsPage = () => {
  return (
    <div>
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

      <main className="bg-gray-50 min-h-screen py-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              College Technical Events
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover the Technical events happening on campus.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
           
            {/* Technical Event Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="/cs.jpeg"
                alt="Cybersecurity Club"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Cybersecurity Club</h3>
                <p className="mt-2 text-gray-600">
                  Follow us on Instagram: <a href="https://www.instagram.com/cybersecurityclub_apsit?igsh=MTU0NDZ3M2JnbHJ1Mg==" className="text-blue-500">Cybersecurity Club APSIT</a>
                </p>
              </div>
            </div>

            {/* Technical Event Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="/d.jpeg"
                alt="DevOps Club"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">DevOps Club</h3>
                <p className="mt-2 text-gray-600">
                  Follow us on Instagram: <a href="https://www.instagram.com/devopsclub_apsit?igsh=eXd5dDM5NHVtdnFo" className="text-blue-500">DevOps Club APSIT</a>
                </p>
              </div>
            </div>

            {/* Technical Event Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="c.jpeg"
                alt="AI & ML Club"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">AI & ML Club</h3>
                <p className="mt-2 text-gray-600">
                  Follow us on Instagram: <a href="https://www.instagram.com/aimlsa_apsit?igsh=MXFhNWN3M3l1aWd0ZQ==" className="text-blue-500">AI & ML Club APSIT</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollegeEventsPage;
