import React from 'react';
import moment from 'moment';
import Display from './functional/Display';
import Header from './functional/Header';
import Row from './Row';
import Table from './functional/Table';
import Stopwatch from './functional/Stopwatch';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            chronological: true,
            timeFormat: 'h:mm',
            isRecording: false,
            record: [],
            start: null,
            stop: null,
            stopwatch: '00:00:00',
            style: 'green'
        };

        this._deleteRecord = this._deleteRecord.bind(this);
        this._formatTimeIfPresent = this._formatTimeIfPresent.bind(this);
        this._handleStart = this._handleStart.bind(this);
        this._handleStop = this._handleStop.bind(this);
        this._runStopwatch = this._runStopwatch.bind(this);
        this._setStyle = this._setStyle.bind(this);
        this._toggleChronological = this._toggleChronological.bind(this);
        this._toggleTimeFormat = this._toggleTimeFormat.bind(this);
        this._updateRecord = this._updateRecord.bind(this);
    }
    render() {
        return (
            <div id="app" className={this.state.style}>
                <Header
                    handleTimeFormatChange={this._toggleTimeFormat}
                    setStyle={this._setStyle}
                    timeFormat={this.state.timeFormat}
                />
                <Display
                    start={this._formatTimeIfPresent(this.state.start)}
                    stop={this._formatTimeIfPresent(this.state.stop)}
                />
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
        const record = [...this.state.record].filter(item => item.start !== startTime);
        this.setState({ record });
    }

    _formatTimeIfPresent(time) {
        if (time) {
            return moment(time).format(this.state.timeFormat);
        }
    }

    _handleStart() {
        const start = moment();
        this.setState({
            isRecording: true,
            start,
            stop: null,
            stopwatch: '00:00:00'
        });
        this.stopwatch = setInterval(this._runStopwatch, 1000);
    }

    _handleStop() {
        const stop = moment();
        clearInterval(this.stopwatch);

        const newRecord = {
            start: this.state.start,
            stop,
            rating: 'zero'
        };

        const record = [...this.state.record];
        record.push(newRecord);

        this.setState({
            isRecording: false,
            record,
            stop
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
        const now = moment();
        const difference = moment.utc(moment(now, "HH:mm:ss").diff(moment(this.state.start, "HH:mm:ss"))).format("HH:mm:ss")
        this.setState({ stopwatch: difference });
    }

    _setStyle(colorString) {
        this.setState({ style: colorString });
    }

    _toggleChronological() {
        this.setState({ chronological: !this.state.chronological });
    }

    _toggleTimeFormat() {
        this.setState({ timeFormat: this.state.timeFormat === 'h:mm' ? 'H:mm' : 'h:mm'});
    }

    _updateRecord(startTime, newRating) {
        const record = [...this.state.record];
        record.forEach(item => {
            if (item.start === startTime) {
                item.rating = newRating;
            }
        });
        this.setState({ record });
    }
}

export default App;
