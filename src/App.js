import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Search from './Components/Header/Search';
import About from './Components/About/About';
import Shop from './Components/Shop';
import ProductDetails from './Components/Home/ProductDetails/ProductDetails';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import Checkout from './Components/Checkout/Checkout/Checkout';
import RequiredAuth from './Components/Login/RequiredAuth/RequiredAuth';
import AddService from './Components/AddService/AddService';
import ManageProducts from './Components/ManageProducts/ManageProducts';

function App() {
  return (
    <div className="App">
     <Header></Header>
         
    
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/product/:productId' element={<ProductDetails></ProductDetails>} ></Route>
      <Route path='/shop' element={<Shop></Shop>} ></Route>
      <Route path='/contact' element={<Contact></Contact>} ></Route>
      <Route path='/about' element={<About></About>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/register' element={<Register></Register>} ></Route>
      <Route path='/checkout' element={
        <RequiredAuth>
          <Checkout></Checkout>
        </RequiredAuth>
      } ></Route>
      <Route path='/addproduct' element={
        <RequiredAuth>
          <AddService></AddService>
        </RequiredAuth>
      } ></Route>
      <Route path='/manageproduct' element={
        <RequiredAuth>
          <ManageProducts></ManageProducts>
        </RequiredAuth>
      } ></Route>
      <Route path='*' element={<NotFound></NotFound>} ></Route>
    
    </Routes>


    <Footer></Footer>     
    </div>
  );
}

export default App;