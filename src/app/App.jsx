import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import Contato from '../pages/Contato.jsx';
import Empresa from '../pages/Empresa.jsx';
import Home from '../pages/Home.jsx';
import Produtos from '../pages/Produtos.jsx';
import Qualidade from '../pages/Qualidade.jsx';
import Revendedores from '../pages/Revendedores.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/qualidade" element={<Qualidade />} />
          <Route path="/revendedores" element={<Revendedores />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
