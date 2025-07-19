import React from 'react'
import Child from './component/Child'
import UseState from './hooks/UseState'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div>
      {/* <Child name="Skill Maven"/> */}
      {/* <UseState/> */}
      {/* <Home isLoggedIn={false}/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={true}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skill />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>

    </div>
  )
}

export default App