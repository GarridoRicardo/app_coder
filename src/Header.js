import Nav from "./NavBar"
const Header = ({nombre,apellido, edad}) => {

  console.log(edad);


  return (
    <header id="header">
      <h1>E-Commerce Ricardo</h1>
      <p>Bienvenido {nombre} {apellido}</p>
    <Nav/>
    </header>
  );
};

export default Header;
