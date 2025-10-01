import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SwitchEsim from "./pages/SwitchEsim";
import Unisimka from "./pages/Unisimka";
import NineEsim from "./pages/NineEsim";
import Fiveber from "./pages/Fiveber";
import EsimMe from "./pages/EsimMe";
import Xesim from "./pages/Xesim";
import Compare from "./pages/Compare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/switch-esim" element={<SwitchEsim />} />
          <Route path="/unisimka" element={<Unisimka />} />
          <Route path="/9esim" element={<NineEsim />} />
          <Route path="/5ber" element={<Fiveber />} />
          <Route path="/esim-me" element={<EsimMe />} />
          <Route path="/xesim" element={<Xesim />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/compare/:slug" element={<Compare />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
