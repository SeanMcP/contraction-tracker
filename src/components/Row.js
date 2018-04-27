import React from "react";
import moment from "moment";
import Rating from "./functional/Rating";
import RowTools from './functional/RowTools';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showTools: false };

    this._hideTools = this._setTools.bind(this, false);
    this._showTools = this._setTools.bind(this, true);
  }
  render() {
    const current = this.props.arr[this.props.i];
    const previous =
      this.props.i > 0 ? this.props.arr[this.props.i - 1] : false;
    return (
      <tr>
        <td>
          <Rating item={current} update={this.props.update}/>
        </td>
        <td>{moment(current.start).format(this.props.timeFormat)}</td>
        <td>
          {this._difference(current.stop, current.start)}
        </td>
        <td>
          {previous ? (
            this._difference(current.start, previous.start)
          ) : 'First'}
        </td>
        <td>
          <RowTools
            display={this.state.showTools}
            delete={() => this.props.delete(current.start)}
            hide={this._hideTools}
            show={this._showTools}
            update={() => this.props.update(current.start, 'zero')}
          />
        </td>
      </tr>
    );
  }

  _difference(time1, time2) {
    const format = 'H:m:s:S';
    const difference = moment.utc(moment(time1, format).diff(moment(time2, format))).format(format);
    return this._humanizeTime(difference);
  }

  _humanizeTime(timeString) {
    const timeArray = timeString.split(':');
    const h = timeArray[0];
    const m = timeArray[1];
    const s = timeArray[2];
    const f = timeArray[3];
    
    if (Number(h) > 0) {
      return `${h}h ${m}m`;
    }
    if (Number(m) > 0) {
      return `${m}m ${s}s`;
    }
    if (Number(s) > 0) {
      return `${s}.${f}s`;
    }
    return `0.${f}s`;
  }

  _setTools(bool) {
    this.setState({ showTools: bool });
  }
}

export default Row;
