import { Routes, Route } from 'react-router-dom'
import {lazy} from "react";

const Vietlott = lazy(() => import('pages/Vietlott'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/vietlott' element={<Vietlott />} />
    </Routes>
  )
}

export default AppRouter;