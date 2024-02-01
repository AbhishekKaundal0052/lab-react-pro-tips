import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>

    <nav className='nav'>
        <Link className='text'to='/' >Kalvium</Link>
      
        <div >
        <Link className='text' to='./Contacts'>Contacts</Link>
        <Link className='text' to='./Form'>Registration Form</Link>
        </div>
    </nav>
    </>
  )
}
