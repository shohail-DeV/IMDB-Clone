"use client";
import { ThemeProvider } from "next-themes";

import React from 'react'

const Providers = ({ children }) => {
  return (
      <ThemeProvider enableSystem={true} attribute="class">
       <div className="dark:text-gray-100 dark:bg-gray-600 transition-colors duration-300 min-h-screen select-none">
        {children}
       </div>
      </ThemeProvider>
  )
}

export default Providers
