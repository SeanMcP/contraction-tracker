import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ start, stop }) => (
    <section className="display">
        <div className="start">
            Start:
            <span>{start}</span>
        </div>
        {stop ? (
            <div className="stop">
                Stop:
                <span>{stop}</span>
            </div>    
        ) : null}
    </section>
);

Display.propTypes = {
    start: PropTypes.string,
    stop: PropTypes.string,
};

export default Display;
