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
        <span>
            {props.timeFormat === 'h:mm' ? '12' : '24'}
        </span>
    </div>
);

TimeToggle.propTypes = {
    handleChange: PropTypes.func.isRequired,
    timeFormat: PropTypes.string.isRequired,
};

export default TimeToggle;
