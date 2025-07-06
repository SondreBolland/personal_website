import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import TopPane from "./components/TopPane";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Publications from "./pages/Publications";
import Learning from "./pages/Learning";
import Projects from "./pages/Projects";
import Message from "./pages/Message";

export default function App() {
  return (
    <Router>
      <div>
        <TopPane />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/message" element={<Message />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);
