import Link from 'next/link'
import React from 'react'
import { RxComponent2 } from 'react-icons/rx'
import { TbDevicesCode } from 'react-icons/tb'

function MobileNavigation() {
  return (
    <div className='w-full h-full p-6'>
        <h2 className='font-roboto mb-4 text-zinc-600 dark:text-zinc-400'>Features</h2>
        <div className='font-openSans flex flex-col gap-2 mb-6 font-medium'>
            <Link href="" className='flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-900 py-2 px-2 rounded-md'>
                <TbDevicesCode className='text-xl' />
                <h2>Snippets</h2>
            </Link>
            <Link href="" className='flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-900 py-2 px-2 rounded-md'>
                <RxComponent2 className='text-xl' />
                <h2>UI Components</h2>
            </Link>
        </div>

        <h2 className='font-roboto mb-3 text-zinc-600 dark:text-zinc-400'>Try codestash/ui</h2>
        <div className='flex flex-col gap-4 font-medium font-openSans'>
            <Link href="/snippets" className='bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-900/70 w-full text-center rounded-md py-2'>Login</Link>
            <Link href="/ui-components" className='bg-zinc-800 dark:bg-zinc-200 hover:bg-zinc-900 dark:hover:bg-zinc-300 text-white dark:text-black w-full text-center rounded-md py-2'>Get Started</Link>
        </div>
    </div>
  )
}

export default MobileNavigation