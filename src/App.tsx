import { lazy,  } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";


const Home = lazy(() => import("./pages/Main/Main"));

// import {GlobalStyles} from './components/globalStyles';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="features" element={<Features />} />
        <Route path="reviews" element={<Reviews />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

  );
}

export default App;
