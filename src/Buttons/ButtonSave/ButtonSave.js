import SaveAltIcon from '@material-ui/icons/SaveAlt';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '../Button';
import { useButtonStyles } from './buttonSave.styles';

export function ButtonSave({
  text,
  icon,
  tooltip,
  disabled,
  className,
  ...props
}) {
  const styles = useButtonStyles();

  function renderButton() {
    return (
      <Button
        disabled={disabled}
        type="button"
        tooltip={tooltip}
        className={clsx(className, styles.buttonSave)}
        {...props}
      >
        <div className={styles.wrapperButton}>
          {icon || <SaveAltIcon />}
          <p className={styles.textButton}>{text || 'Save'}</p>
        </div>
      </Button>
    );
  }
  return renderButton();
}

ButtonSave.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    placement: PropTypes.string,
  }),
  className: PropTypes.string,
};
