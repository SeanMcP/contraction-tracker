import React from 'react';
import PropTypes from 'prop-types';

const ColorBubble = props => (
    <div
        className={`color-bubble click ${props.color}`}
        onClick={() => props.handleChange(props.color)}
    />
);

ColorBubble.propTypes = {
    color: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default ColorBubble;