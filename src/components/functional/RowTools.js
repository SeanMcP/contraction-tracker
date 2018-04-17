import React from 'react';
import PropTypes from 'prop-types';

const RowTools = props => {
    if (props.display) {
        return (
            <div className="row-tools">
                <div onClick={props.update}>Clear rating</div>
                <div onClick={props.delete}>Delete</div>
                <div onClick={props.hide}>Done</div>
            </div>
        );
    }
    return (
        <div className="click" onClick={props.show}>
            Edit
        </div>
    )
};

RowTools.propTypes = {
    display: PropTypes.bool.isRequired,
    delete: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
}

export default RowTools;
