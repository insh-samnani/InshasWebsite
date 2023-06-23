import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props){
    let location = useLocation();
    return(
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{color:'white'}}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h1? "active": ""}`} aria-current="page" to="/" style={{color:'white'}}>{props.h1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h2? "active": ""}`} to={props.h2} style={{color:'white'}}>{props.h2}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h3? "active": ""}`} to={props.h3} style={{color:'white'}}>{props.h3}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h4? "active": ""}`} to={props.h4} style={{color:'white'}}>{props.h4}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h5? "active": ""}`} to={props.h5} style={{color:'white'}}>{props.h5}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h6? "active": ""}`} to={props.h6} style={{color:'white'}}>{props.h6}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Title',
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: ''
};