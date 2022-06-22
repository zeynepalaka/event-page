import logo from "../pictures/logo.png";

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="logo">
        <img src={logo} alt="logo"></img>
      </a>
      <div className="menu">
        <a href="#">Etkinlikler</a>
        <a href="#">Kategori</a>
        <div className="templateContainer"></div>
      </div>
    </div>
  );
};

export default Header;
