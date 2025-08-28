import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./BlogPost";
import LawyerProfile from "./LawyerProfile";
import QuizPage from "./QuizPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizPage />} /> 
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/lawyer" element={<LawyerProfile />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}
