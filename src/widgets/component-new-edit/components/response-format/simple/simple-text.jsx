import React from 'react';
import { FormSection, Field } from 'redux-form';

import Input from 'forms/controls/input';
import Dictionary from 'utils/dictionary/dictionary';
import { DATATYPE_NAME } from 'constants/pogues-constants';

const { TEXT } = DATATYPE_NAME;

class ResponseFormatDatatypeText extends FormSection {
  static defaultProps = {
    name: TEXT,
    readOnly: false,
    required: true
  };
  render() {
    return (
      <div className="response-format-datatype-text">
        <Field
          name="maxLength"
          type="number"
          component={Input}
          label={Dictionary.maxLength}
          required={this.props.required}
          disabled={this.props.readOnly}
        />
        <Field
          name="pattern"
          type="text"
          component={Input}
          label={Dictionary.pattern}
          disabled={this.props.readOnly}
        />
      </div>
    );
  }
}

export default ResponseFormatDatatypeText;
