import { pink } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 182, 193)',
  },
  heading: {
    color: 'purple',
  },
  image: {
    marginRight: '100px',
  },
}));