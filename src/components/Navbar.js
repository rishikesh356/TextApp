import React from 'react'
import PropTypes from 'prop-types'
// import {a} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border border-danger`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About">{props.link}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">MORE</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="frm form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="searchBtn btn btn-outline-success text-warning rounded-2" type="submit">Search</button>
                        </form>
                        <div id="switch" className="form-check form-switch mx-2">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.switchStyle}>{props.switchText}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    //  title : 'WEBSITE',
    link: 'ABOUT US'
}
