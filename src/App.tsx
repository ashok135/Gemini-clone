 
import './App.css'
import Header from './component/Header'
import Searchbar from './component/Searchbar'
import Sidebar from './component/Sidebar'

function App() {
   

  return (
    <>
    <div className=' relative  flex'>
      <div className=''>  <Sidebar/></div>
      <div className='w-full px-4 flex flex-col justify-between py-3'><Header/>
      <Searchbar/></div>
      
      
    </div>
    <div>
      
    </div>
    
  
       
    </>
  )
}

export default App
