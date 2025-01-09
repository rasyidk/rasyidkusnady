'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="min-h-[64px] border-b border-line flex py-2 sticky z-10 w-full px-4 md:px-0 top-0 bg-primary ">
      <div className="container flex items-center justify-between mx-auto">
        <Image
          src="/image/logo.svg"
          alt="Logo"
          width={100}
          height={20}
          priority
          className="w-auto h-8 lg:h-auto"
        />

        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-0 left-0 w-full bg-primary border-line border-b md:border-none md:relative md:block md:w-auto mt-[64px] md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 text-lg ">
            <li>
              <a
                href="#"
                className=" text-secondary hover:text-white px-4 py-2 justify-end flex border-line border-b md:border-none md-border"
              >
                works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex text-secondary hover:text-white px-4 py-2 justify-end "
              >
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
