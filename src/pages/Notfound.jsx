import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div className='Notfound'>
<h1 className='N-h1'>Opps! This Page Does Not Exist!</h1>
<h1 className='N-emoji'  >¯\_(ツ)_/¯</h1>
<Link to="/" className='N add'>HomePage</Link>
    </div>
  )
}
