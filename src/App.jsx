import Header from "./components/Header"
import Main from "./components/Main"

function App() {


  return (
    <div className="app bg-[#F5F5F5] flex justify-center w-[100%] " style={{background:"#F5F5F5 0% 0% no-repeat padding-box",opacity: 1}}>
      <div className="font-gilroy">
        <Header/>
        <Main/>
      </div>
    </div>
  )
}

export default App
