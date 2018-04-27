import React from "react";
import PropTypes from 'prop-types';

const Rating = props => (
    <div className={"rating " + props.item.rating}>
      <div onClick={() => props.update(props.item.start, 'one')}>!</div>
      <div onClick={() => props.update(props.item.start, 'two')}>!</div>
      <div onClick={() => props.update(props.item.start, 'three')} >!</div>
    </div>
);

Rating.propTypes = {
    item: PropTypes.object.isRequired
};

export default Rating;
