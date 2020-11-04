import React,{ useEffect } from "react";
import DishItem from "./DishItem";
import { connect } from 'react-redux';
import { getDishes } from '../../actions/dishes';
import PropTypes from 'prop-types';

const Dishes = ({ getDishes , dishes:{ dishes } }) => {
  useEffect(() => {
    getDishes();
  },[getDishes])
  return (
    <div className="row">
      { dishes.map(dish => (dish !== null) ?
      <DishItem key={dish.id} dish={dish} /> : 'No Dishes')}
    </div>
  );
};

Dishes.propTypes = {
  dishes: PropTypes.object.isRequired,
  getDishes:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  dishes : state.dishes
});

export default connect(mapStateToProps,{ getDishes })(Dishes);
