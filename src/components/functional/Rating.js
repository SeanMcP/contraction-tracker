import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Rating = ({ item: { rating, start }, update }) => (
    <div className="rating">
        <div 
            className={rating > 0 ? 'inherit-color' : ''}
            onClick={() => update(start, 1)}>
            <Icon icon="flash_on" size="md-18"/>
        </div>
        <div 
            className={rating > 1 ? 'inherit-color' : ''}
            onClick={() => update(start, 2)}>
            <Icon icon="flash_on" size="md-18"/>
        </div>
        <div 
            className={rating > 2 ? 'inherit-color' : ''}
            onClick={() => update(start, 3)} >
            <Icon icon="flash_on" size="md-18"/>
        </div>
    </div>
);

Rating.propTypes = {
    item: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
};

export default Rating;
