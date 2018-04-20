import React from 'react';
import PropTypes from 'prop-types';
// import Colon from './Colon';

const Stopwatch = (props) => (
    <section className="stopwatch">
        <div className="display">
            {props.time}
        </div>
        <div className="button" onClick={props.recording ? props.stop : props.start}>
            {props.recording ? 'Stop' : 'Start'}
        </div>
    </section>
);

// const checkForHours = (str) => {
//     const hours = str.slice(0, 2);
//     if (hours === '00') {
//         return str.slice(3);
//     }
//     return str;
// }

Stopwatch.propTypes = {
    time: PropTypes.string.isRequired,
    recording: PropTypes.bool.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
};

export default Stopwatch;