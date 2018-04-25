import React from 'react';
import PropTypes from 'prop-types';
import ColorBubble from './ColorBubble';

const ColorOptions = (props) => (
    <div className="color-options">
        <ColorBubble
            color="blue"
            handleChange={props.handleChange}
        />
        <ColorBubble
            color="pink"
            handleChange={props.handleChange}
        />
        <ColorBubble
            color="green"
            handleChange={props.handleChange}
        />
        <ColorBubble
            color="yellow"
            handleChange={props.handleChange}
        />
    </div>
);

ColorOptions.propTypes = {
    handleChange: PropTypes.func.isRequired,
};

export default ColorOptions;