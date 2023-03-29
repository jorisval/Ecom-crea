import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Blog from './components/pages/Blog';
import Catalog from './components/pages/Catalog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Legal from './components/pages/Legal';
import PortfolioBoutique from './components/pages/Portfolio-boutique';
import PortfolioVideo from './components/pages/Portfolio-video';
import Product from './components/pages/Product';
import StyledHeader from './components/styles/Header';
import { HeaderProvider } from './components/utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HeaderProvider>
        <StyledHeader />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/portfolio' element={<PortfolioBoutique />}/>
          <Route path='/portfolio-video' element={<PortfolioVideo />}/>
          <Route path='/faq' element={<Legal />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/blog' element={<Blog />}/>
        </Routes>
        <Footer />
      </HeaderProvider>
    </Router>
  </React.StrictMode>
);

