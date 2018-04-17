import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const RowTools = props => {
    if (props.display) {
        return (
            <div className="row-tools">
                <div onClick={props.update}><Icon help="Clear rating" icon="refresh"/></div>
                <div onClick={props.delete}><Icon help="Delete record" icon="delete"/></div>
                <div onClick={props.hide}><Icon help="Hide menu" icon="check"/></div>
            </div>
        );
    }
    return (
        <div className="click" onClick={props.show}>
            <Icon icon="mode_edit"/>
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
