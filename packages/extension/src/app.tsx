import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, MemoryRouter, Routes, HashRouter } from 'react-router-dom'
import BlogConfig from './pages/BlogConfig'
import Home from './pages/Home'
import { BlogInfoContextProvider } from './contexts/blogGlobalContext'
import Publish from './pages/Publish'
import BlogConfigGetApiToken from './pages/BlogConfig/BlogConfigGetApiToken/BlogConfigGetApiToken'
import BlogConfigSelectRepo from './pages/BlogConfig/BlogConfigSelectRepo'
import BlogConfigSetBlogName from './pages/BlogConfig/BlogConfigSetBlogName'

const App: React.FC<{}> = () => {
  return (
    <BlogInfoContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-config" element={<BlogConfig />}>
          <Route path="step1" element={<BlogConfigGetApiToken />} />
          <Route path="step2" element={<BlogConfigSelectRepo />} />
          <Route path="step3" element={<BlogConfigSetBlogName />} />
        </Route>
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </BlogInfoContextProvider>
  )
}

export function initApp() {
  const appNode = document.getElementById('react-root')
  ReactDOM.createRoot(appNode!).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  )
}
