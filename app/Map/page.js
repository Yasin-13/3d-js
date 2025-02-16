"use client"

import React from "react"
import Link from "next/link"
import { FaUniversity, FaChevronDown } from "react-icons/fa"
import { motion } from "framer-motion"

const CampusFloor = () => {

  const floors = [
    { name: "Basement", href: "/Basement", color: "from-purple-100 to-purple-200" },
    { name: "Ground Floor", href: "/Ground", color: "from-blue-100 to-blue-200" },
    { name: "First Floor", href: "/First", color: "from-green-100 to-green-200" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <motion.h1
              className="text-4xl font-bold text-gray-800 flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaUniversity className="mr-3 text-blue-600" />
              Information Kiosk
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your ultimate guide to navigating college life effortlessly
            </motion.p>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow space-y-8 mt-12 px-4">
        {floors.map((floor, index) => (
          <React.Fragment key={floor.name}>
            <motion.div
              className="w-full max-w-md perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={floor.href}>
                <motion.div
                  className={`w-full h-32 bg-gradient-to-r ${floor.color} text-gray-800 flex items-center justify-center text-2xl font-semibold rounded-xl shadow-lg cursor-pointer overflow-hidden group relative`}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{floor.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={false}
                    whileHover={{ scale: 1.5, rotate: 15 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
            {index < floors.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.1 }}
              >
                <FaChevronDown className="text-gray-400 text-3xl animate-bounce" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default CampusFloor
