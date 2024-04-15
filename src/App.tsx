import { Routes, Route } from 'react-router-dom'
import Vietlott from 'pages/Vietlott';

const App = () => {

  return (
   <>
     <Routes>
       <Route path='/vietlott' element={<Vietlott />} />
     </Routes>
   </>
  )
}

export default App
