import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  const location = useLocation();
  const isProductDetail = location.pathname.startsWith("/producto/");

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      {/* Extra bottom clearance on mobile so the sticky WhatsApp bar on the
          product page never covers the footer's own content. */}
      <div className={isProductDetail ? "pb-16 md:pb-0" : undefined}>
        <Footer />
      </div>
      {/* On mobile, the product detail page has its own sticky WhatsApp bar,
          so the floating button is hidden there to avoid two overlapping
          WhatsApp CTAs on a small screen. It still shows on desktop. */}
      <FloatingWhatsAppButton className={isProductDetail ? "hidden md:flex" : undefined} />
    </div>
  );
}

export default App;
