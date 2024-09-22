import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-700 pb-20'>
    <h1 className='my-10 text-center text-4xl'>
      Get in Touch
    </h1>
    <div className='text-center tracking-tighter'>
     <p className='my-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text:4xl tracking-tight text-transparent'>{CONTACT.address}</p>
     <p className='my-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text:4xl tracking-tight text-transparent'>{CONTACT.phoneNo}</p>
     <a href='#' className='my-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text:4xl tracking-tight text-transparent'>{CONTACT.email}</a>
    </div>
    </div>
  )
}

export default Contact
