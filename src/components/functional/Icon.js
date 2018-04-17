import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => (
    <span
        className={'click material-icons ' + (props.size ? props.size : '')}
        onClick={props.action ? props.action : null}
        title={props.help}
        >
        {props.icon}
    </span>
);

Icon.propTypes = {
    action: PropTypes.func,
    help: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.string
};

export default Icon;