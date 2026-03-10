import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Aerospace from "./pages/Aerospace";
import Software from "./pages/Software";
import Products from "./pages/Products";
import Product4kN from"./pages/Product4kN";
import Product12kN from"./pages/Product12kN";
import Product500N from"./pages/Product500N";
import NewsEvents from "./pages/NewsEvents";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Global Toasters */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/aerospace" element={<Aerospace />} />
              <Route path="/software" element={<Software />} />
              <Route path="/products" element={<Products />} />
            <Route path="/products/4kn" element={<Product4kN />} />
            <Route path="/products/1.2kn" element={<Product12kN />} />
            <Route path="/products/500n" element={<Product500N />} />
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
