import React from 'react';
import PropTypes from 'prop-types';
import Colon from './Colon';

const Stopwatch = (props) => (
    <section className="stopwatch">
        <div className="display">
            {props.time.hh > 0 ? (
                <div>
                    <div>{forceTwoDigits(props.time.hh)}:</div>
                    <Colon/>
                </div>
            ) : null}
            <div>{forceTwoDigits(props.time.mm)}</div>
            <Colon/>
            <div>{forceTwoDigits(props.time.ss)}</div>
            <Colon/>
            <div>{forceTwoDigits(props.time.fr)}</div>
        </div>
        <div className="button" onClick={props.recording ? props.stop : props.start}>
            {props.recording ? 'Stop' : 'Start'}
        </div>
    </section>
);

const forceTwoDigits = (num) => {
    let display = num.toString();

    if (display.length === 1) {
        display = '0' + display;
    }

    return display;
} 

Stopwatch.propTypes = {
    time: PropTypes.object.isRequired,
    recording: PropTypes.bool.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
};

export default Stopwatch;