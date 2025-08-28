import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuizPage from "./pages/QuizPage";
import LawyerProfile from "./pages/LawyerProfile";
import BlogPost from "./pages/BlogPost";
import "./App.css";
const queryClient = new QueryClient();
const App = ()=>(<QueryClientProvider client={queryClient} data-spec-id="i6Y436zmM8Qhc8MM">
    <TooltipProvider data-spec-id="zKnGzzQr5We2zibT">
      <Toaster data-spec-id="VVGbeQw9EsLY3sa6"/>
      <BrowserRouter data-spec-id="kXuFLFpDVAJiOXVb">
        <Routes data-spec-id="w18gtwNSXuycqVXg">
          <Route path="/specai-page/Index" element={<Index data-spec-id="svyB9vBx7NTegCmI"/>} data-spec-id="Zl1jMjsh80bNHOvd"/>
          <Route path="/specai-page/NotFound" element={<NotFound data-spec-id="YEwJnTs6EApHh1pX"/>} data-spec-id="JFk3iB7z8jx9S3RM"/>

          <Route path="/" element={<Index data-dora-id="1" data-spec-id="5mPWsYL8XcWNger0"/>} data-spec-id="sXuedD31E93Zz4kf"/>
          <Route path="/quiz" element={<QuizPage data-spec-id="BoVXLeB6j03fxxVT"/>} data-spec-id="iEHSAJjxynCH9i1K"/>
          <Route path="/lawyer/:id" element={<LawyerProfile data-spec-id="f0dDJMH8GDhNRKv6"/>} data-spec-id="gm6EkMPA7qM3LwWJ"/>
          <Route path="/blog/:id" element={<BlogPost data-spec-id="pv9mfjrAMy7XN0rd"/>} data-spec-id="vyjSvYSQIhuQtUrj"/>
          {}
          <Route path="*" element={<NotFound data-spec-id="wsOtIqorinuVTPIN"/>} data-spec-id="YE37tXhQXcu1v7tQ"/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>);
export default App;
