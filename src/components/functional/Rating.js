import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Rating = ({ item: { rating, start }, update }) => (
    <div className={"rating " + rating}>
        <div onClick={() => update(start, 'one')}>
            <Icon icon="flash_on" size="md-18"/>
        </div>
        <div onClick={() => update(start, 'two')}>
            <Icon icon="flash_on" size="md-18"/>
        </div>
        <div onClick={() => update(start, 'three')} >
            <Icon icon="flash_on" size="md-18"/>
        </div>
    </div>
);

Rating.propTypes = {
    item: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
};

export default Rating;
