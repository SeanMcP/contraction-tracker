import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const TimeToggle = (props) => (
    <div
        className="time-toggle click"
        onClick={props.handleChange}
    >
        <Icon
            help="Toggle time format"
            icon="access_time"
        />
        {props.timeFormat === 'h:mm a' ? '12-hr' : '24-hr'}
    </div>
);

TimeToggle.propTypes = {
    handleChange: PropTypes.func.isRequired,
    timeFormat: PropTypes.string.isRequired,
};

export default TimeToggle;