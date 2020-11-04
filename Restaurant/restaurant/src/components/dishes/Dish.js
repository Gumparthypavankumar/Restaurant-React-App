import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDish, addComment } from "../../actions/dishes";
import { connect } from "react-redux";
import Moment from "react-moment";
import { BASE_URL } from '../../actions/types';

const Dish = ({ getDish, addComment, match, dish}) => {
  useEffect(() => {
    getDish(match.params.id);
  },[getDish]);
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const { name, comment } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(match.params.id, dish, formData);
    setFormData({ ...formData, name : '',comment:'' });
  };
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src={BASE_URL+dish.image} className="card-img-top" alt="" />
          <div className="card-header">
            <p className="lead">{dish.name}<span style={{marginLeft : '120px'}}>$<strong>{dish.price}</strong></span></p>
          </div>
          <div className="card-body">
            <p className="lead">{dish.description}</p>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <h2>Add a comment</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mb-3">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Comment: </label>
            <textarea
              className="form-control"
              name="comment"
              value={comment}
              onChange={(e) => onChange(e)}
              rows="3"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
        <div className="mt-3">
          <h4>Comments</h4>
          {dish.comments.length > 0
            ? dish.comments.map((comment,index) => (
                <Fragment key={index}>
                  <p>Author : {comment.name}</p>
                  <p>Comment : {comment.comment}</p>
                  <p>
                    Created on :{" "}
                    <Moment format="YYYY/MM/DD hh:mm:ss">{comment.date}</Moment>
                  </p>
                  <hr/>
                </Fragment>
              ))
            : "No Comments"}
        </div>
      </div>
    </div>
  );
};

Dish.propTypes = {
  getDish: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  dish: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  dish: state.dishes.dish
});

export default connect(mapStateToProps, { getDish, addComment })(Dish);
