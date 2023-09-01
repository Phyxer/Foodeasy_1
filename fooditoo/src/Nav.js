import './Nav.css';
import { Link } from 'react-router-dom';
import logoImage from './img/logo.png';
import Donate_food from './Donate_food.js';

function Nav() {
  return (<>
    <nav className="navbar">
      <div className="logo">
        <img className="logo__img" src={logoImage} alt="" />
      </div>

      <ul className="subnav">
        <li className="nav__items">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__items">
          <Link to="/available_food">Available food</Link>
        </li>
        <li className="nav__items">
          <Link to="/Donate_Food"> Donate food</Link>
        </li>
        <li className="nav__items">
          <Link to="/Pricing">Pricing</Link>
        </li>
        <li className="nav__items">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
{/* <div className="body"></div> */}
</>

  );
}

export default Nav;
