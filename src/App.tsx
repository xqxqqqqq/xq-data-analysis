import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import BeginnerGuide from "@/pages/BeginnerGuide";
import Resources from "@/pages/Resources";
import Cases from "@/pages/Cases";

export default function App() {
  return (
    <Router>
      <style dangerouslySetInnerHTML={{__html: `
        * {
          scrollbar-width: none !important;
        }
        *::-webkit-scrollbar {
          display: none !important;
        }
      `}} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-10 border-b border-slate-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                <span className="text-3xl">📊</span>
                <span>数据分析实战</span>
              </Link>
              <nav className="flex flex-wrap justify-center gap-6">
                <Link to="/beginner-guide" className="text-slate-600 hover:text-blue-600 font-semibold transition-all duration-300 text-base hover:scale-105 flex items-center gap-2">
                  <span>📖</span>
                  入门教程
                </Link>
                <Link to="/resources" className="text-slate-600 hover:text-blue-600 font-semibold transition-all duration-300 text-base hover:scale-105 flex items-center gap-2">
                  <span>📚</span>
                  学习资源
                </Link>
                <Link to="/cases" className="text-slate-600 hover:text-blue-600 font-semibold transition-all duration-300 text-base hover:scale-105 flex items-center gap-2">
                  <span>🏢</span>
                  企业案例
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/beginner-guide" element={<BeginnerGuide />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/cases" element={<Cases />} />
        </Routes>
      </div>
    </Router>
  );
}
