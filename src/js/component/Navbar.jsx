import React from "react";

const Navbar = () => {
    return (
        <div className="container-fluid sticky-top bg-dark" data-bs-theme="dark">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Wacha Ese</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav position-absolute end-0">
                            <a className="nav-link active" aria-current="page" href="#">Hommie</a>
                            <a className="nav-link" href="#">Sobres</a>
                            <a className="nav-link" href="#">Mandados</a>
                            <a className="nav-link" href="#">Llama pa atras</a>
                          
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Navbar;