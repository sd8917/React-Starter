import React from 'react';
const TopBar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#">ShopLane</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item"   >
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
                        >Disabled</a
                        >
                    </li>
                </ul>
                <form className="d-flex input-group w-auto">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Type query"
                        aria-label="Search"
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        data-mdb-ripple-color="dark"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>);
}

export default TopBar;