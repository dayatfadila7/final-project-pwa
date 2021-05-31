import {Link, BrowserRouter as Router} from 'react-router-dom'

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Router>
                    <Link to={`/`} className="navbar-brand">Nidnod Manga</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <Link to={`/`} className="nav-link">Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-link nav-link" data-toggle="modal"
                                        data-target="#disclaimerleModal">
                                    Disclaimer
                                </button>
                            </li>

                        </ul>
                    </div>
                </Router>
            </div>
        </nav>
    )
}

export default Navigation