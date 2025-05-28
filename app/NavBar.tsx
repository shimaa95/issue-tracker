'use client'

import Link from 'next/link'
import React from 'react'
import {AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation' 

function NavBar() {
    const links=[
        {label:'Dashboard', href:'/'},
        {label:'Issues', href:'/issues'},
    ]

    const currentPathName=usePathname()
  return (
    <nav className='flex space-x-6 border-zinc-200 border-b h-16 items-center px-6 mb-6'>
       <Link href='/' ><AiFillBug size={24} /></Link> 
       <ul className='flex space-x-6 '>
       {links.map((i)=>
       <Link key={i.href} href={i.href}
        className={`${currentPathName === i.href?
             'text-zinc-900' : ' text-zinc-500'}
              hover:text-zinc-800 transition-colors`}>
                {i.label}
                </Link>
    )}
        
       </ul>
    </nav>
  )
}

export default NavBar