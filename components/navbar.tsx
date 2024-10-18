import React from 'react'
import Logo from './logo'
import ThemeToggle from './theme-toggle'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='flex items-center justify-between w-full px-8 py-3'>
      <div className='flex items-center gap-10'>
      <Logo />
      <div className='flex items-center gap-5 font-openSans text-sm font-semibold text-zinc-700 dark:text-zinc-400'>
        <Link href="" className='hover:text-black dark:hover:text-white'>
          <h2>Snippets</h2>
        </Link>
        <Link href="" className='hover:text-black dark:hover:text-white'>
          <h2>Components</h2>
        </Link>
      </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2 font-medium font-roboto text-sm'>
          <Link href="">
            <button className='px-2.5 py-1.5 hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-900 dark:hover:text-white rounded-md'>Log in</button>
          </Link>
          <Link href="">
            <button className='px-2.5 py-1.5 rounded-md text-white dark:text-black bg-zinc-800 dark:bg-zinc-100 hover:bg-zinc-900 dark:hover:bg-zinc-200'>Get Started</button>
          </Link>
        </div>
        <div className='w-[1px] bg-black dark:bg-white h-[24px]' />
        <div className='flex items-center'>
        <Link href='' className='p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900'>
          <FaGithub className='text-lg' />
        </Link>
        <Link href='' className='p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900'>
          <FaLinkedin className='text-lg' />
        </Link>
        <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar