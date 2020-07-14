import React, { Component } from 'react';
import './Header.css';
// import Products from './Products';

class Header extends Component {
    render() {
        return (
            <header className="body">
                <div className="header">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-blender-phone"> 0356 021 924</i>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-phone-square"> 0384 456 878</i>
                </div>
            </header>
        )
    }
}

export default Header;