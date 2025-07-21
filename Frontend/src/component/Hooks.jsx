import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div>
        <Link className='Link' to='/useState'>useState</Link>
        <Link className='Link' to='/useEffect'>useEffect</Link>
    </div>
  )
}

export default Hooks