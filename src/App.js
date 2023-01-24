import React, { useState } from 'react'
import data from './Data'
import List from './List'
import { NewBirthday } from './NewBirthday'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <NewBirthday />
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
