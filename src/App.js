import Header from './components/Header';
import Homepage from './pages/Homepage';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
   <>
    <Header/>
    <Routes>
          <Route path='/' element={<Homepage/>} exact/>
          {/* <Route path='/about' element={<About/>} exact />
          <Route path='/contact' element={<Contact/>} exact/>
          <Route path= '*' element={<NotFound/>} /> */}
    </Routes>
   </>
  )
}
export default App;
