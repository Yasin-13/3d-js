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
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://example.com/event1.jpg"
                alt="Event 1"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Spring Festival</h3>
                <p className="mt-2 text-gray-600">
                  Join us for a celebration of spring with music, dance, and food from around the world.
                </p>
                <p className="mt-4 text-gray-500">Date: March 20, 2025</p>
                <p className="mt-1 text-gray-500">Location: Main Quad</p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://example.com/event2.jpg"
                alt="Event 2"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Cultural Night</h3>
                <p className="mt-2 text-gray-600">
                  Experience the diverse cultures of our student body through performances and exhibitions.
                </p>
                <p className="mt-4 text-gray-500">Date: April 15, 2025</p>
                <p className="mt-1 text-gray-500">Location: Student Center</p>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://example.com/event3.jpg"
                alt="Event 3"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Art Exhibition</h3>
                <p className="mt-2 text-gray-600">
                  Explore the creativity of our students through their artwork displayed in the campus gallery.
                </p>
                <p className="mt-4 text-gray-500">Date: May 10, 2025</p>
                <p className="mt-1 text-gray-500">Location: Campus Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollegeEventsPage;
