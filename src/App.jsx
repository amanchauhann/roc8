import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Pages from './Pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
    </>
  )
}

export default App
