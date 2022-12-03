import { Route, Routes } from 'react-router-dom';
import ProductProvider from './context/ProductProvider';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import TopRated from './Pages/TopRated';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
// import LongForm from './Pages/LongForm';
// import ShortForm from './Pages/ShortForm';

function App() {
  return (
    <div>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/top-rated' element={<TopRated />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
        </Routes>
      </ProductProvider>



      {/* <ShortForm /> */}
      {/* <LongForm /> */}
    </div>
  );
}

export default App;
