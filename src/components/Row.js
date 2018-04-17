import React from "react";
import moment from "moment";
import Rating from "./Rating";
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
        <td>{moment(current.stop).format(this.props.timeFormat)}</td>
        <td>
          {moment.duration(current.stop.diff(current.start)).as("seconds").toFixed(1)}s
        </td>
        <td>
          {previous ? (
            moment.utc(moment(current.start, "HH:mm:ss").diff(moment(previous.start, "HH:mm:ss"))).format("HH:mm:ss")
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

  _setTools(bool) {
    this.setState({ showTools: bool });
  }
}

export default Row;
