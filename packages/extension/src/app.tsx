import React from 'react'
import ReactDOM from 'react-dom/client'
import craftXIconSrc from './craftx-icon.png'

const App: React.FC<{}> = () => {
  const isDarkMode = useCraftDarkMode()

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img className="icon" src={craftXIconSrc} alt="CraftX logo" />
      <button className={`btn ${isDarkMode ? 'dark' : ''}`} onClick={insertHelloWorld}>
        Hello world!
      </button>
    </div>
  )
}

function useCraftDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    craft.env.setListener((env) => setIsDarkMode(env.colorScheme === 'dark'))
  }, [])

  return isDarkMode
}

function insertHelloWorld() {
  const block = craft.blockFactory.textBlock({
    content: 'Hello world!',
  })

  craft.dataApi.addBlocks([block])
}

export function initApp() {
  const appNode = document.getElementById('react-root')
  ReactDOM.createRoot(appNode!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
