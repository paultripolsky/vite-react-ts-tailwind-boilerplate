import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
  return (
    <div>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Index</Link>
    </div>
  )
}

export default Navbar
