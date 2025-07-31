import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import ProjectDetail from "@/pages/project-detail";
import Publications from "@/pages/publications";
import Tools from "@/pages/tools";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import DependableSystemsSecurity from "@/pages/research/dependable-systems-security";
import AIDrivenCybersecurity from "@/pages/research/ai-driven-cybersecurity";
import AdversarialML from "@/pages/research/adversarial-ml";
import SecureSoftwareDevelopment from "@/pages/research/secure-software-development";
import TrustworthyExplainableAI from "@/pages/research/trustworthy-explainable-ai";
import DataPrivacyPreservation from "@/pages/research/data-privacy-preservation";
import CriticalInfrastructureCPS from "@/pages/research/critical-infrastructure-cps";
import BlockchainTechnologyApplications from "@/pages/research/blockchain-technology-applications";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/project-detail" component={ProjectDetail} />
      <Route path="/publications" component={Publications} />
      <Route path="/tools" component={Tools} />
      <Route path="/about" component={About} />
      <Route path="/cv" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/my_reports/DSS.html" component={DependableSystemsSecurity} />
      <Route path="/my_reports/AI_CYS.html" component={AIDrivenCybersecurity} />
      <Route path="/my_reports/AML.html" component={AdversarialML} />
      <Route path="/my_reports/SSD.html" component={SecureSoftwareDevelopment} />
      <Route path="/my_reports/XAI.html" component={TrustworthyExplainableAI} />
      <Route path="/my_reports/DPP.html" component={DataPrivacyPreservation} />
      <Route path="/my_reports/CPS.html" component={CriticalInfrastructureCPS} />
      <Route path="/my_reports/BCA.html" component={BlockchainTechnologyApplications} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
