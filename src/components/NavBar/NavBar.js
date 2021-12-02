import CartWidget from "./CartWidget";
import { Link , NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" exact>
                <img src="./LOGO.png" width="100px" alt="" />                
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    <Link to="/categoria/1" className="nav-link active" aria-current="page">
                        Categoria 1
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/categoria/2" className="nav-link active" aria-current="page">
                        Categoria 2
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/categoria/3" className="nav-link active" aria-current="page">
                        Categoria 3
                    </Link>
                    </li>
                    <li className="nav-item">
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav> 
        <CartWidget/>
        </>
    );}
export default Nav;
