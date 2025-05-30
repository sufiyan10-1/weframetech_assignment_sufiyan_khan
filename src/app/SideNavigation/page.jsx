'use client'

import React, { useState } from 'react'
import { SidebarClose, SidebarOpen } from 'lucide-react';

function Page() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    'Home',
    'Stages & Checklist',
    'Upload Docs',
    'Preferred Vendors',
    'Tech Stack',
    'Targets',
    'Zee Sales Targets',
    'MAI Settings',
    'Pending Questions',
  ];

  return (
    <>
      {/* Fixed Button */}
      <div className="fixed top-4 left-4 z-20 ">
        {isOpen ? (
          <button name='Toggle-Sidebar-button' aria-label="Toggle Sidebar" onClick={() => setIsOpen(false)}>
            <SidebarClose className='text-white' />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <SidebarOpen />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div className=" z-10">
        <nav className={`flex flex-col justify-between transition-all duration-300 h-full bg-cyan-900 text-white ${isOpen ? 'w-60 p-4' : 'w-0 overflow-hidden'
          }`}>
          <ul className="mt-20">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-500 ${item === 'Home' ? 'bg-gray-500 text-white' : 'text-white'
                  } flex justify-between items-center`}
              >
                {item}
                {item === 'Pending Questions' && (
                  <span className="bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                    3
                  </span>
                )}
              </li>
            ))}
          </ul>
          <button name="logout" className='text-gray-300 text-left '>Logout</button>
        </nav>

      </div>
    </>
  )
}

export default Page;
