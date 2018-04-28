import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ start, stop }) => (
    <section className="display">
        {start ? (
            <div className="start">
                Start:
                <span>{start}</span>
            </div>
        ) : null}
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
