import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>25+ Reactjs interview projects</h1>
      <div className="buttons">
        <Link to="/pagination" className="btn">
          <button>Pagination</button>
        </Link>
        <Link to="/file-explorer" className="btn">
          <button>File Explorer</button>
        </Link>
        <Link to="/breadcrumb" className="btn">
          <button>Bread Crumb</button>
        </Link>
        <Link to="/progress-bar" className="btn">
          <button>Progress Bar</button>
        </Link>
        <Link to="/gridlights" className="btn">
          <button>Grid Lights</button>
        </Link>
        <Link to="/quizapp" className="btn">
          <button>Quiz App</button>
        </Link>
        <Link to="/tictactoe" className="btn">
          <button>Tic Tac Toe</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
