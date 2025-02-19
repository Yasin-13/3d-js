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
              College Cultural Events
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover the vibrant cultural events happening on campus.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
           

            

            {/* Event Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="/a.jpeg"
                alt="Antarang Event"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Antarang Events</h3>
                <p className="mt-2 text-gray-600">
                  "Antarang" is an initiative brought to you by the Counselling Department of A.P. Shah Institute of Technology.
                  In this fast paced of life, people have stopped exploring their own self, whereas all the answers to life are within them!
                  This is an event, wherein individual, through self-scrutiny, get an opportunity to connect with their true selves!
                  Through this one will:
                  <ul className="list-disc pl-5">
                    <li>Heal and discover insights about the own self</li>
                    <li>Learn the necessary skills for a happy and peaceful life</li>
                    <li>Undergo self transformation</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Event Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="/n.jpeg"
                alt="NSS Event"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">NSS Events & Activities</h3>
                <p className="mt-2 text-gray-600">
                  The motto of National Service Scheme is NOT ME BUT YOU. Benefits of Being a NSS Volunteer:
                  A NSS volunteer who takes part in the community service programme would either be a college level or a senior secondary level student.
                  Being an active member these student volunteers would have the exposure and experience to be the following:
                  <ul className="list-disc pl-5">
                    <li>An accomplished social leader</li>
                    <li>An efficient administrator</li>
                    <li>A person who understands human nature</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Event Card 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="/o.jpeg"
                alt="Ojus Cultural Event"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Ojus Cultural Events</h3>
                <p className="mt-2 text-gray-600">
                  Follow us on Instagram: <a href="https://www.instagram.com/ojus_apsit?igsh=MWkxcHFzOG1vcmc2ZQ==" className="text-blue-500">Ojus APSIT</a>
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