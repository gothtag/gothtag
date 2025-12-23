import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import Community from "@/pages/Community";
import FAQ from "@/pages/FAQ";
import Socials from "@/pages/Socials";
import Apply from "@/pages/Apply";
import NotFound from "@/pages/not-found";
import { MainLayout } from "@/pages/MainLayout";

function Router() {

  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/home">
        {() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )}
      </Route>
      <Route path="/community">
        {() => (
          <MainLayout>
            <Community />
          </MainLayout>
        )}
      </Route>
      <Route path="/faq">
        {() => (
          <MainLayout>
            <FAQ />
          </MainLayout>
        )}
      </Route>
      <Route path="/socials">
        {() => (
          <MainLayout>
            <Socials />
          </MainLayout>
        )}
      </Route>
      <Route path="/apply">
        {() => (
          <MainLayout>
            <Apply />
          </MainLayout>
        )}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Global effects */}
        <div className="bg-noise" />
        <div className="vignette" />
        
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
