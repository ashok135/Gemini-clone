import { User, UserCircle } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center'><h1 className='text-[30px]'>Gemini</h1> <UserCircle size={30}/> </div>
  )
}

export default Header