import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import SwitchEsim from "./pages/SwitchEsim";
import Unisimka from "./pages/Unisimka";
import NineEsim from "./pages/NineEsim";
import Fiveber from "./pages/Fiveber";
import EsimMe from "./pages/EsimMe";
import Xesim from "./pages/Xesim";
import Compare from "./pages/Compare";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/adapter/switch-esim" element={<SwitchEsim />} />
            <Route path="/adapter/unisimka" element={<Unisimka />} />
            <Route path="/adapter/nine-esim" element={<NineEsim />} />
            <Route path="/adapter/9esim" element={<NineEsim />} />
            <Route path="/adapter/fiveber" element={<Fiveber />} />
            <Route path="/adapter/5ber" element={<Fiveber />} />
            <Route path="/adapter/esim-me" element={<EsimMe />} />
            <Route path="/adapter/xesim" element={<Xesim />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;