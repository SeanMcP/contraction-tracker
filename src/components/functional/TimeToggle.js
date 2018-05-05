import React from 'react';
import PropTypes from 'prop-types';

const TimeToggle = (props) => (
    <div
        className="time-toggle click inherit-color-hover"
        onClick={props.handleChange}
    >
        {props.timeFormat === 'h:mm' ? '12 hr' : '24 hr'}
    </div>
);

TimeToggle.propTypes = {
    handleChange: PropTypes.func.isRequired,
    timeFormat: PropTypes.string.isRequired,
};

export default TimeToggle;
