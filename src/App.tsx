import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Main = React.lazy(() => import('./pages/Main'));
const Catalog = React.lazy(() => import('./pages/Catalog'));
const CampersItem = React.lazy(() => import('./pages/CampersItem'));

function App() {
  return (
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/campers" element={<Catalog />} />
      <Route path="/campers/:id" element={<CampersItem />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
</Suspense>

  );
}

export default App;
