import { Routes, Route } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Header from "./components/Header";
import ProductsList from './pages/ProductList';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/products' element={<ProductsList/>} errorElement={<ErrorPage/>}/>
        <Route path='/favourites' element={<ErrorPage/>} errorElement={<ErrorPage/>}/>
      </Routes>
    </>
  );
};

export default App;
