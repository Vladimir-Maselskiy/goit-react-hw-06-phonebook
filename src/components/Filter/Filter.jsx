import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'redux/actions';
import { connect } from 'react-redux';

const Filter = ({ value, onFilterChange }) => (
  <div>
    <input value={value} type="text" onChange={onFilterChange} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  onFilterChange: event => dispatch(filter(event.target.value)),
});

const mapStateToProps = state => ({
  value: state.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};
