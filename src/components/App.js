import React from 'react';
import moment from 'moment';
import Row from './Row';
import Table from './functional/Table';
import Stopwatch from './functional/Stopwatch';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            chronological: true,
            timeFormat: 'h:mm a',
            isRecording: false,
            record: [],
            start: null,
            stopwatch: {
                hh: 0,
                mm: 0,
                ss: 0,
                fr: 0
            },
        };

        this._deleteRecord = this._deleteRecord.bind(this);
        this._handleStart = this._handleStart.bind(this);
        this._handleStop = this._handleStop.bind(this);
        this._runStopwatch = this._runStopwatch.bind(this);
        this._toggleChronological = this._toggleChronological.bind(this);
        this._toggleTimeFormat = this._toggleTimeFormat.bind(this);
        this._updateRecord = this._updateRecord.bind(this);
    }
    render() {
        return (
            <div>
                <div onClick={this._toggleTimeFormat}>{this.state.timeFormat === 'h:mm' ? '24-hour' : '12-hour'}</div>
                <h1>Contraction Tracker</h1>
                {this.state.isRecording ? (
                    <button onClick={this._handleStop}>Stop</button>
                ) : (
                        <button onClick={this._handleStart}>Start</button>
                    )}
                <h2>
                    Start:
                    {this.state.start ? moment(this.state.start).format(this.state.timeFormat) : null}
                </h2>
                <Table
                    chronological={this.state.chronological}
                    toggleChronological={this._toggleChronological}
                >
                    {this._renderRows(this.state.record)}
                </Table>
                <Stopwatch
                    time={this.state.stopwatch}
                    recording={this.state.isRecording}
                    start={this._handleStart}
                    stop={this._handleStop}
                />
            </div>
        );
    }

    _deleteRecord(startTime) {
        const record = this.state.record.filter(item => item.start !== startTime);
        this.setState({ record });
    }

    _handleStart() {
        const start = moment();
        this.setState({
            isRecording: true,
            start
        });
        this.stopwatch = setInterval(this._runStopwatch, 10);
    }

    _handleStop() {
        const stop = moment();
        clearInterval(this.stopwatch);

        const newRecord = {
            start: this.state.start,
            stop,
            rating: 'zero'
        };

        const record = this.state.record;
        record.push(newRecord);

        this.setState({
            isRecording: false,
            start: null,
            stopwatch: {
                mm: 0,
                ss: 0,
                fr: 0
            },
            record
        });
    }

    _renderRows(arr) {
        return arr.map((item, index) => (
            <Row
                arr={arr}
                delete={this._deleteRecord}
                i={index}
                key={item.start}
                timeFormat={this.state.timeFormat}
                update={this._updateRecord}
            />
        ));
    }

    _runStopwatch() {
        let hh = this.state.stopwatch.hh;
        let mm = this.state.stopwatch.mm;
        let ss = this.state.stopwatch.ss;
        let fr = this.state.stopwatch.fr;

        fr++;
        if (fr === 100) {
            ss++;
            fr -= 100;
        }
        if (ss === 60) {
            mm++;
            ss -= 60;
        }
        if (mm === 60) {
            hh++;
            mm -= 60;
        }
        if (hh === 24) {
            hh = 0;
            mm = 0;
            ss = 0;
            fr = 0;
        }
        this.setState({ stopwatch: { hh, mm, ss, fr }});
    }

    _toggleChronological() {
        this.setState({ chronological: !this.state.chronological });
    }

    _toggleTimeFormat() {
        this.setState({ timeFormat: this.state.timeFormat === 'h:mm a' ? 'H:mm' : 'h:mm a'});
    }

    _updateRecord(startTime, newRating) {
        let record = this.state.record;
        record.forEach(item => {
            if (item.start === startTime) {
                item.rating = newRating;
            }
        });
        this.setState({ record });
    }
}

export default App;
