import React from 'react';
import PropTypes from 'prop-types';
import ColorOptions from './ColorOptions';
import TimeToggle from './TimeToggle';
// import logo from '../../logo.svg';
// <img src={logo} className="app-logo" alt="Contraction Tracker" />

const Header = props => (
    <header>
        <h1>Contraction Tracker</h1>
        <div className="tools">
            <ColorOptions
                handleChange={props.setStyle}
            />
            <TimeToggle
                handleChange={props.handleTimeFormatChange}
                timeFormat={props.timeFormat}
            />
        </div>
    </header>
);

Header.propTypes = {
    handleTimeFormatChange: PropTypes.func.isRequired,
    setStyle: PropTypes.func.isRequired,
    timeFormat: PropTypes.string.isRequired,
};

export default Header;
