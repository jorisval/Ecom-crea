import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Blog from './components/pages/Blog';
import Article from './components/pages/Article';
import Catalog from './components/pages/Catalog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Legal from './components/pages/Legal';
import Portfolio from './components/pages/Portfolio';
import PortfolioBoutique from './components/pages/Portfolio-boutique';
import PortfolioVideo from './components/pages/Portfolio-video';
import Product from './components/pages/Product';
import StyledHeader from './components/styles/Header';
import { CartProvider, HeaderProvider } from './components/utils/context';
import Checkout from './components/pages/Checkout';
import ThankYou from './components/pages/Thank-you';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HeaderProvider>
        <CartProvider>
          <StyledHeader />
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/catalog' element={<Catalog />}/>
            <Route path='/product/:productId' element={<Product />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/thank-you' element={<ThankYou />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/portfolio-boutiques' element={<PortfolioBoutique />}/>
            <Route path='/portfolio-videos' element={<PortfolioVideo />}/>
            <Route path='/faq' element={<Legal />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/article/:articleId' element={<Article />} />
          </Routes>
          <Footer />
        </CartProvider>
      </HeaderProvider>
    </Router>
  </React.StrictMode>
);

