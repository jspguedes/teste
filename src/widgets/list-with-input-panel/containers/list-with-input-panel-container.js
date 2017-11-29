import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions, formValueSelector, getFormValues } from 'redux-form';

import { setErrorsByFormPaths, clearErrorsByFormPaths } from 'actions/errors';
import ListWithInputPanel from '../components/list-with-input-panel';

// Proptypes and defaultProps

const propTypes = {
  formName: PropTypes.string.isRequired,
  selectorPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  errors: PropTypes.array,
  canSubmit: PropTypes.bool,
  canRemove: PropTypes.bool,
  canDuplicate: PropTypes.bool,
  validateForm: PropTypes.func.isRequired,
  resetObject: PropTypes.object.isRequired,
};

const defaultProps = {
  errors: [],
  canSubmit: true,
  canRemove: true,
  canDuplicate: true,
};

// Container

const mapStateToProps = (state, { formName, selectorPath }) => {
  const selector = formValueSelector(formName);

  return {
    formValues: getFormValues(formName)(state),
    currentValues: selector(state, selectorPath),
  };
};

const mapDispatchToProps = {
  change: actions.change,
  arrayRemove: actions.arrayRemove,
  arrayPush: actions.arrayPush,
  arrayInsert: actions.arrayInsert,
  setErrors: setErrorsByFormPaths,
  clearErrors: clearErrorsByFormPaths,
};

const ListWithInputPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ListWithInputPanel);

ListWithInputPanelContainer.propTypes = propTypes;
ListWithInputPanelContainer.defaultProps = defaultProps;

export default ListWithInputPanelContainer;
