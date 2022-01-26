import React from 'react'
import EventList from './components/EventList'
import Header from './components/Header'
import { EventProvider } from './contexts'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <EventProvider>
          <Header />

          <EventList />
        </EventProvider>
      </div>
    </div>
  )
}

export default App
