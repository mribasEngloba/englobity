import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '@material-ui/core';
import { usButtonGroupStyles } from './buttonGroup.styles';
import { Button } from '../Button';

export function CustomButtonGroup({
  options,
  className,
  rootClassName,
  defaultOption,
  ...props
}) {
  const classes = usButtonGroupStyles();
  const [selectedOption, setSelectedOption] = useState(defaultOption || 0);

  const onSelectOption = (option, i) => {
    setSelectedOption(i);
    option.action();
  };

  return (
    <div className={`${rootClassName} ${classes.buttonGroup}`}>
      <ButtonGroup {...props}>
        {options.map((option, i) => (
          <Button
            onClick={() => onSelectOption(option, i)}
            type={selectedOption === i ? 'primary' : 'secondary'}
          >
            {option.icon && option.icon}  {option.name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

CustomButtonGroup.propTypes = {
  className: PropTypes.string,
  rootClassName: PropTypes.string,
  selectedOption: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      action: PropTypes.function,
    })
  ),
};
