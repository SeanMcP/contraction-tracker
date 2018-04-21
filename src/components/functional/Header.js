import React from 'react';
import PropTypes from 'prop-types';
import TimeToggle from './TimeToggle';

const Header = props => (
    <header>
        <h1>Contraction Tracker</h1>
        <TimeToggle
            handleChange={props.handleTimeFormatChange}
            timeFormat={props.timeFormat}
        />
    </header>
);

Header.propTypes = {
    handleTimeFormatChange: PropTypes.func.isRequired,
    timeFormat: PropTypes.string.isRequired,
};

export default Header;