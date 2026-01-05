 
 
import Content from '../component/Content'
import Header from '../component/Header'
import Searchbar from '../component/Searchbar'
import Sidebar from '../component/Sidebar'

function Home() {
  return (
    <>
    <div className='    flex'>
      <div className=''> <Sidebar/></div>
      <div className='w-full px-4 flex flex-col relative py-3'><Header/>
      <Content/>


      <Searchbar/></div>
      
      
    </div>
    <div>
      
    </div>
    </>
  )
}

export default Home