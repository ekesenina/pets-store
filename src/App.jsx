import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import ProductsList from './pages/ProductList';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/products' element={<ProductsList/>}/>
      </Routes>
    </>
  );
};

export default App;
