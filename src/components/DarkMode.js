"use client";
import React,{useState,useEffect} from 'react'
import {MdDarkMode} from 'react-icons/md'
import {MdLightMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

const DarkMode = () => {
  
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
    return (
    <>
    {mounted && currentTheme === 'dark' ?
(
<MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/> 
)
 :
 (
     <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500' />
 )
    }
     </>
  )
}

export default DarkMode
