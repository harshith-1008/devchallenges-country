import './App.css'
import Background from "./Background"
import MainContent from "./MainContent"

function App() {
  return (
    <div className='relative'>
      <Background />
      <MainContent className="absolute flex flex-row justify-center justify-items-center"/>
    </div>
  )
}

export default App
