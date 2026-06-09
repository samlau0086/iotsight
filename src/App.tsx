import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FactoryEnergy from './pages/FactoryEnergy';
import Gateway from './pages/Gateway';
import Demo from './pages/Demo';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogList from './pages/BlogList';
import BlogPostPage from './pages/BlogPostPage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import SolutionsList from './pages/SolutionsList';
import SolutionDetail from './pages/SolutionDetail';
import ScrollToTop from './components/ScrollToTop';
import { AIChatWidget } from './components/AIChatWidget';

export function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/factory-energy" element={<FactoryEnergy />} />
            <Route path="/solutions" element={<SolutionsList />} />
            <Route path="/solutions/:id" element={<SolutionDetail />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/gateway" element={<Gateway />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
