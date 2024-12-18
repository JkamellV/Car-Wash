import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <div className="Txt-CarWash">Car Wash</div>
      <div className="navbar">
        <ul className="ulnavbar">
          <li className="navbar-list">
            <a href="#"> Profile </a>
          </li>
          <li className="navbar-list">
            <a href="#">Offers</a>
          </li>
          <li className="navbar-list">
            <a href="#">Save</a>
          </li>
          <li className="navbar-list">
            <a href="#">About us</a>
          </li>
          <li className="navbar-list">
            <a href="#">Booking</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
