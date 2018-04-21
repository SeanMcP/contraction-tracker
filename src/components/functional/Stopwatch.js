import React from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon';

const Stopwatch = (props) => (
    <section className="stopwatch">
        <div className={`display${props.time !== '00:00:00' && !props.recording ? ' flashing' : ''}`}>
            {props.time}
        </div>
        <div className="button" onClick={props.recording ? props.stop : props.start}>
            {props.recording ? 'Stop' : 'Start'}
            {/* {props.recording
                ? <Icon icon="stop" />
                : <Icon icon="play_arrow" />} */}
        </div>
    </section>
);

Stopwatch.propTypes = {
    time: PropTypes.string.isRequired,
    recording: PropTypes.bool.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
};

export default Stopwatch;