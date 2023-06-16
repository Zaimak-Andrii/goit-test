import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/layouts/Layout';
import { RoutePath } from './constants/routes';
import './App.css';

const MainPage = lazy(() => import('pages/MainPage'));
const TweetsPage = lazy(() => import('pages/TweetsPage'));

const App = () => {
  return (
    <Routes>
      <Route path={RoutePath.MAIN} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={RoutePath.TWEETS} element={<TweetsPage />} />
        <Route path='*' element={<Navigate to={RoutePath.MAIN} replace={true} />} />
      </Route>
    </Routes>
  );
};

export default App;
