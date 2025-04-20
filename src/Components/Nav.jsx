import React from 'react'

function Nav() {
  return (
    <>
    <nav className='flex items-center justify-between py-5 px-10 bg-theme'>
    <h2 className='text-2xl'>VenialTheNobody</h2>
    <div className=' flex gap-8 items-center'>
        <h4 className='text-xl'>Services</h4>
        <h4 className='text-xl'>Home</h4>
        <h4 className='text-xl'>About</h4>
        <h4 className='text-xl'>Contact</h4>
    </div>
    </nav>
    </>
  )
}

export default Nav