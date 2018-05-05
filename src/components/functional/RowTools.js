import React from 'react';
import PropTypes from 'prop-types';

const RowTools = props => (
    <div className="row-tools">
        <div
            className="button click inherit-color-hover"
            onClick={props.toggle}
        >
            Edit
        </div>
        {props.display ? (
            <div className="wrapper">
                <ul className="menu">
                    <li
                        className="click inherit-color-hover"
                        onClick={props.update}
                    >
                        <span>Clear rating</span>
                    </li>
                    <li
                        className="click inherit-color-hover"
                        onClick={props.delete}
                    >
                        <span>Delete record</span>
                    </li>
                    <li
                        className="click inherit-color-hover"
                        onClick={props.hide}
                    >
                        <strong>Done</strong>
                    </li>
                </ul>
                <div className="overlay" onClick={props.toggle} />
            </div>
        ) : null}
    </div>
);

RowTools.propTypes = {
    display: PropTypes.bool.isRequired,
    delete: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
}

export default RowTools;
