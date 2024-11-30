export function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        <ul>
          <li>
            <div className="nav-bar-logo">
              <p>Shoppy</p>
            </div>
          </li>
          <li>
            <div className="nav-bar-home">
              <p>Home</p>
            </div>
          </li>
          <li>
            <div className="nav-bar-shop">
              <p>Online Shop</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
