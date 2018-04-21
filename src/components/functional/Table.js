import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Table = props => (
    <table>
        <tbody className={props.chronological ? 'chronological' : 'reverse-chronological'}>
            <tr className="head">
                <th>Rating</th>
                <th
                    className="click"
                    onClick={props.toggleChronological
                }>
                    Start <Icon icon="sort" size={props.chronological ? 'md-18' : 'md-18 flipped'}/>
                </th>
                <th>Length</th>
                <th>Frequency</th>
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