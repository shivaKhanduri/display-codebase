import LOGO from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg '>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src={LOGO} alt='Image description' width='85' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item mx-2 rounded dropdown'>
              <a
                className='nav-link dropdown-toggle ubBold'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Question Banks
              </a>
              <ul
                className='dropdown-menu ubBold'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <Link className='dropdown-item' to='/VITQuestionBank'>
                    VIT Question Bank
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/CBSEQuestionBank'>
                    CBSE Question Bank
                  </Link>
                </li>
              </ul>
            </li>

            <li className='nav-item mx-2 rounded'>
              <Link className='nav-link unibudBold' to='/GPACalculator'>
                GPA Calculator
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
