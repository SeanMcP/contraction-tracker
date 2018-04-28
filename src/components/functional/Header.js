import React from 'react';
import PropTypes from 'prop-types';
import ColorOptions from './ColorOptions';
import TimeToggle from './TimeToggle';
// import Logo from '../contraction-tracker.svg';

const Header = props => (
    <header>
        <h1>Contraction Tracker</h1>
        <ColorOptions
            handleChange={props.setStyle}
        />
        <TimeToggle
            handleChange={props.handleTimeFormatChange}
            timeFormat={props.timeFormat}
        />
    </header>
);

Header.propTypes = {
    handleTimeFormatChange: PropTypes.func.isRequired,
    setStyle: PropTypes.func.isRequired,
    timeFormat: PropTypes.string.isRequired,
};

export default Header;
