import React from 'react'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '90px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
          <h1>Welcome to Ricenow</h1>
          <p>Page content goes here...</p>
        </div>
      </main>
    </>
  )
}
