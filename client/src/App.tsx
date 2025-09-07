
import './App.css'
import Posts from "./componnet/application-layout/posts"
import Heders from "./componnet/application-layout/Heders"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='mainApp' >
      <Heders/>
      <Posts/>
    </div>
  )
}

export default App
