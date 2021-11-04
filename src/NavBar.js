import Cart from "./CartWidget";
import { Link , NavLink } from "react-router-dom";
const Nav = () => {
    return (
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <NavLink class="navbar-brand" to={"/"} exact>
                <img src="./LOGO.png" width="100px" alt="" />                
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link to="/categoria/1" class="nav-link active" aria-current="page">
                        Categoria 1
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/categoria/2" class="nav-link active" aria-current="page">
                        Categoria 2
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/categoria/3" class="nav-link active" aria-current="page">
                        Categoria 3
                    </Link>
                    </li>
                    <Cart />
                </ul>
                </div>
            </div>
        </nav> 
    );}

export default Nav;
