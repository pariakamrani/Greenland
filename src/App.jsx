
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import './App.css'
import Menue from './component/menue'
import Pic1undermenye from './component/Pic1undermenye'
import Iconlikeimg from './component/Iconlikeimg'
import Squerpic from './component/Squerpic'
import Zamfolia from './component/Zamfolia'
import Begonia from './component/Begonia'
import Bonsay from './component/Bonsay';
import Footer from './component/Footer';
import Test from './component/Test';




function App() {
  

  return (
    <>


      <Router>
        <Menue/>
        
        
        
            
        <Routes>
          <Route path='/'  element={<>  <Pic1undermenye/> <Squerpic/> <Iconlikeimg/>  </>}/>
          <Route path='/zamfolia' element={<Zamfolia/> }/>
           <Route path='/begonia' element={<Begonia/> }/>
           <Route path='/bonsay' element={<Bonsay/>}/>
           <Route path='/test' element={<Test/>}/>


        
        </Routes>

         <Footer/>
      </Router>
      
     
     
     
     
      
    </>
  )
}

export default App
