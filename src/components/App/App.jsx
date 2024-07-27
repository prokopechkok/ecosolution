import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
const MainPage = lazy(() => import('../../pages/MainPage/MainPage.jsx'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage.jsx'));
// const test = import.meta.env.VITE_API_TEST;
import s from './App.module.css';
function App() {
  return (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
