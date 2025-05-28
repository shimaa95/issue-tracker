import Link from 'next/link'
import React from 'react'
import {AiFillBug } from 'react-icons/ai'

function NavBar() {
    const links=[
        {label:'Dashboard', href:'/'},
        {label:'Issues', href:'/issues'},
    ]
  return (
    <nav className='flex space-x-6 border-zinc-200 border-b h-16 items-center px-6 mb-6'>
       <Link href='/' ><AiFillBug size={30} /></Link> 
       <ul className='flex space-x-6 '>
       {links.map((i)=>
       <Link key={i.href} href={i.href} className='text-zinc-500 hover:text-zinc-800 transition-colors '>{i.label}</Link>
    )}
        
       </ul>
    </nav>
  )
}

export default NavBar