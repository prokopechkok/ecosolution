import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage.jsx'));
// const test = import.meta.env.VITE_API_TEST;

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
