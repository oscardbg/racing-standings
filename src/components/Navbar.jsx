import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <Link to="/" className="main-link">
            <h1>no-spoilers racing</h1>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/f1">Formula 1</Link>
            </li>
            <li>
              <Link to="/motogp">Moto GP</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
