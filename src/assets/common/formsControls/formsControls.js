import React from 'react'
import './formsControls.css'

//Create a default validator //
export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={hasError ? 'input-container input_error' : 'input-container'}>
        <Element className={'visual-input'} {...input} {...props} />
        { hasError && <span className={hasError ? 'span_error' : ''}> { meta.error } </span> }
      </div>
    );
  };