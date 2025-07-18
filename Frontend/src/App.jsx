import React from 'react'
import Child from './component/Child'
import UseState from './hooks/UseState'

const App = () => {
  return (
    <div>
      <Child name="Skill Maven"/>
      <UseState/>
    </div>
  )
}

export default App