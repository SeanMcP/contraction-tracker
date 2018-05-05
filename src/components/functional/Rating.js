import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Rating = ({ item: { rating, start }, update }) => (
    <div className="rating">
        <div 
            className={rating !== 'zero' ? 'inherit-color' : ''}
            onClick={() => update(start, 'one')}>
            <Icon icon="flash_on" size="md-18"/>
        </div>
        <div 
            className={rating === 'two' || rating === 'three' ? 'inherit-color' : ''}
            onClick={() => update(start, 'two')}>
            <Icon icon="flash_on" size="md-18"/>
        </div>
        <div 
            className={rating === 'three' ? 'inherit-color' : ''}
            onClick={() => update(start, 'three')} >
            <Icon icon="flash_on" size="md-18"/>
        </div>
    </div>
);

Rating.propTypes = {
    item: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
};

export default Rating;
