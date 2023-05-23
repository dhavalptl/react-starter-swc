import { display } from "./utils/first"

function App() {
  const message = display();
  return (
    <>
      <div className="test">Welcome to application</div>
      <div>{message}</div>
    </>
  )
}

export default App
