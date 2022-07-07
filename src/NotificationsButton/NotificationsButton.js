import React from 'react';
import PropTypes from 'prop-types';
import { Badge, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useNotificationsButtonStyles } from './notificationsButton.styles';
import clsx from 'clsx';

export function NotificationsButton({
	onClick,
	className,
	counter
}) {
  const styles = useNotificationsButtonStyles();

  return (
    <IconButton onClick={onClick} className={clsx(className, styles.notificationsIcon)}>
      <Badge
        color="primary"
        badgeContent={counter ?? 0}
        invisible={!(counter > 0)}
      >
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

NotificationsButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	counter: PropTypes.number.isRequired
};
