import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <h2>
          <span className="sport">Sport</span>Zone
        </h2>
        <ul className="list">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Comunity</a>
          </li>
        </ul>
        <div className="icons">
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          <button className="btnHead">LogOut</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
