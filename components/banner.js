/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { useState } from "react";
import React from "react";

export default function Banner() {
  const [isActive, setActive] = useState("true");
  const handleToggle = () => {
      setActive(!isActive);
  };

  return (
    <div 
    className={isActive ? "bg-sky-500" : "hidden"}
    >
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-sky-600">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">HackMUN IV registration is open!</span>
              <span className="hidden md:inline">HackMUN IV registration is open!</span>
            </p>
          </div>
          { /*
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="/committees"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-sky-500 bg-white hover:bg-sky-50"
            >
              Committees
            </a>
          </div>
          */ }
        </div>
      </div>
    </div>
  )
}