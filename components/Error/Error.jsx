import React from 'react';
import Styles from './Error.module.css';

function Error(props) {
  return (
    <div>
      {props.message}
    </div>
  )
}

Error.defaultProps = {
  message: 'An error occurred'
}

export default Error;