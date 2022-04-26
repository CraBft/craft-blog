import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, MemoryRouter, Routes } from 'react-router-dom'
import BlogConfig from './pages/BlogConfig'
import Home from './pages/Home'

const App: React.FC<{}> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-config" element={<BlogConfig />} />
      </Routes>
    </>
  )
}

export function initApp() {
  const appNode = document.getElementById('react-root')
  ReactDOM.createRoot(appNode!).render(
    <React.StrictMode>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </React.StrictMode>
  )
}
