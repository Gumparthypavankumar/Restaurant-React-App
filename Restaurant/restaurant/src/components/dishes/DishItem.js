import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BASE_URL } from '../../actions/types';

const DishItem = ({ dish }) => {
  return (
      <div className="col-md-4 col-sm-12 mb-sm-2 mt-2 h-100">
        <div className="card">
            <Link to={`/dish/${dish.id}`}><img src={BASE_URL+dish.image} className="card-img-top" alt=""/></Link>
          <div className="card-header">
            <p className="lead">{dish.name}</p>
          </div>
        </div>
      </div>
  );
};

DishItem.propTypes={
    dish : PropTypes.object.isRequired
}

export default DishItem;
