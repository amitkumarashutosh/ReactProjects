import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Pagination,
  FileExplorer,
  BreadCrumb,
  ProgressBar,
  GridLights,
  QuizApp,
  TicTacToe,
} from "./features";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/breadcrumb" element={<BreadCrumb />} />
          <Route path="/file-explorer" element={<FileExplorer />} />
          <Route path="/progress-bar" element={<ProgressBar />} />
          <Route path="/gridlights" element={<GridLights />} />
          <Route path="/quizapp" element={<QuizApp />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
