import React from 'react'
import './style.css';

class NavigationBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <div>
                    <h4 className="logo">LOGO</h4>
                </div>
                <div className="nav-bar-items">
                    <p className="nav-bar-item">Home</p>
                    <p className="nav-bar-item">My Portfolio</p>
                    <p className="nav-bar-item">Clients</p>
                    <p className="nav-bar-item">Get in Touch</p>
                </div>
            </div>
        )
    }
}

export default NavigationBar