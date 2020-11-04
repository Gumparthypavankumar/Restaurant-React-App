import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = ({ alerts }) => {
  return (
    <Fragment>
      {alerts.length > 0 && (alerts.map(alert => 
          <div key={alert.id} className={`alert alert-${alert.type}`} role="alert">
            {alert.msg}
          </div>))}
    </Fragment>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert.alerts,
});

export default connect(mapStateToProps, null)(Alert);
