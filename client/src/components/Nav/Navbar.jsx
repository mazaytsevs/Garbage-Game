import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <div>
          <div id="navbarNav">
            <ul>
              <li>
                <NavLink
                  to="/auth/logout"
                >
                  Sign out
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/info"
                >
                  Info
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rules"
                >
                  Rules
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/reg"
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/login"
                >
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
