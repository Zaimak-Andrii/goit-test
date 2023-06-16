import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense fallback='Loading...'>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
