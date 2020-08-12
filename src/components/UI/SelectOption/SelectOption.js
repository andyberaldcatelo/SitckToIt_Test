import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const selectOption = (props) => {
  const transformedOptions = Object.keys(props.options).map((optionKey) => {
    return [
      ...Array(props.options[optionKey]).map((_, i) => {
        return (
          <option key={optionKey + i} value={props.options[optionKey]}>
            {optionKey}
          </option>
        );
      }),
    ];
  });
  return <Auxiliary>{transformedOptions}</Auxiliary>;
};

export default selectOption;
