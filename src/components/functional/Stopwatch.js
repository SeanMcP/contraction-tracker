import React from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon';

const Stopwatch = (props) => (
    <section className="stopwatch">
        <div className={`display${props.time !== '00:00:00' && !props.recording ? ' flashing' : ''}`}>
            {insertColon(props.time)}
        </div>
        <div className="button" onClick={props.recording ? props.stop : props.start}>
            {props.recording ? 'Stop' : 'Start'}
            {/* {props.recording
                ? <Icon icon="stop" />
                : <Icon icon="play_arrow" />} */}
        </div>
    </section>
);

const insertColon = timeString => {
    const output = [];
    const timeArray = timeString.split(':');
    timeArray.forEach(item => {
        output.push(<span key={output.length}>{item}</span>);
        output.push(<span className="colon" key={output.length}/>);
    });
    output.pop();
    return output;
}

Stopwatch.propTypes = {
    time: PropTypes.string.isRequired,
    recording: PropTypes.bool.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
};

export default Stopwatch;
