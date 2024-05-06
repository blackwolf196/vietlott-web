import {Routes, Route, Navigate} from 'react-router-dom'
import {lazy} from "react";

const Vietlott = lazy(() => import('pages/Vietlott'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/vietlott" replace />}/>
      <Route path='/vietlott' element={<Vietlott/>}/>
      <Route path="*" element={<Navigate to="/vietlott" replace />}/>
    </Routes>
  )
}

export default AppRouter;