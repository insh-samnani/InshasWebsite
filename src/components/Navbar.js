import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props){
    let location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(true);    

    const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    };

    const handleLinkClick = () => {
        if (!isCollapsed) {
          setIsCollapsed(true);
        }
    };  

    return(
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{color:'white'}}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isCollapsed} aria-label="Toggle navigation" onClick={handleToggle}>
                <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{ color: 'white' }}></i></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h1? "active": ""}`} aria-current="page" to="/" style={{color:'white'}} onClick={handleLinkClick}>{props.h1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h2? "active": ""}`} to={props.h2} style={{color:'white'}} onClick={handleLinkClick}>{props.h2}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h3? "active": ""}`} to={props.h3} style={{color:'white'}} onClick={handleLinkClick}>{props.h3}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h4? "active": ""}`} to={props.h4} style={{color:'white'}} onClick={handleLinkClick}>{props.h4}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h5? "active": ""}`} to={props.h5} style={{color:'white'}} onClick={handleLinkClick}>{props.h5}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname===props.h6? "active": ""}`} to={props.h6} style={{color:'white'}} onClick={handleLinkClick}>{props.h6}</Link>
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