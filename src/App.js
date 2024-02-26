import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './MainComponant/Home';
import Category from './Filecomponent/Category';
import Header from './Header_footer/Header';
import Footer from './Header_footer/Footer';
import Products from './Filecomponent/Products';
import Trend from './Filecomponent/Trend';
import Discountpage from './Filecomponent/Discountpage';
import SaleTimer from './Filecomponent/Common-Componant/SaleTimer';
import Slider from './Filecomponent/Common-Componant/Slider';
import Shop from './ShopComponant/categorySec';
import Instaphotos from './Filecomponent/Common-Componant/Instaphotos';
import CategoryNavigation from './MainComponant/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/trend' element={<Trend/>}/>
      <Route path='/discountpage' element={<Discountpage/>}/>
      <Route path='/sale' element={<SaleTimer/>}/>
      <Route path='/slider' element={<Slider/>}/>
      <Route path='/insta' element={<Instaphotos/>}/>
      <Route path='/about' element={<CategoryNavigation/>}/>


      
      <Route path='/products' element={<Products/>}/>
      <Route path='/category' element={<Category/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
