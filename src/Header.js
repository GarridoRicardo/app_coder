import Nav from "./NavBar"
const Header = ({nombre,apellido, edad}) => {
  return (
    <header id="header">
      <h1>Comercio Ricardo Garrido</h1>
      <p>Bienvenido {nombre} {apellido}</p>
    <Nav/>
    <div>
      <h2>Productos</h2>
      </div>
    </header>
  );
};

export default Header;
