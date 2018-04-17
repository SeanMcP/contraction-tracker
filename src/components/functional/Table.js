import React from 'react';
import PropTypes from 'prop-types';

const Table = props => (
    <table>
        <tbody className={props.chronological ? 'chronological' : 'reverse-chronological'}>
            <tr className="head">
                <th>Rating</th>
                <th
                    className="click"
                    onClick={props.toggleChronological
                }>
                    Start {props.chronological ? 'v' : '^'}
                </th>
                <th>Stop</th>
                <th>Duration</th>
                <th>Time between</th>
                <th>Tools</th>
            </tr>
            {props.children}
        </tbody>
    </table>
);

Table.propTypes = {
    children: PropTypes.array,
    chronological: PropTypes.bool.isRequired,
    toggleChronological: PropTypes.func.isRequired,
};

export default Table;