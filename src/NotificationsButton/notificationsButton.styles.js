import { makeStyles } from '@material-ui/core/styles';

export const useNotificationsButtonStyles = makeStyles(theme => ({
  notificationsIcon: {
    '& .MuiBadge-colorPrimary':{
      backgroundColor: 'red'
    }
  }
}));
