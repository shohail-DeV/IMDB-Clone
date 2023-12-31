"use client";
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({title,params}) => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

  return (
    <div>
      <Link className={`m-4 hover:text-amber-600 font-semibold p-2 
      ${genre && genre === params && 'underline underline-offset-8 decoration-amber-600 rounded-lg'}`}   
      href={`/?genre=${params}`}>
      {title}
      </Link>
    </div>
  )
}

export default NavbarItem
