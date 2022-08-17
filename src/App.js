import logo from './logo.svg';
import './App.css';
import Add from './Component/Add'
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './Component/Update';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      {/* <Add/> */}

      <BrowserRouter >
      <Header/>
     <Routes>
       {/* <Route path="/" element={<ProductList />} /> */}
       <Route path="/" element={<Home />} />
       <Route path="/add" element={<Add />} />
       <Route path="/about" element={<About />} />
       <Route path="/update/:id" element={<Update />} />
       </Routes>
       <Footer/>
     </BrowserRouter>  
    </div>
  );
}

export default App;
