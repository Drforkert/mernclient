import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    padding: '1rem',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,0,0, 1)',
    textDecoration: 'none',
    fontSize: 'clamp(1.5rem, 5vw, 1.2rem)',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('xs')]: {
    heading: {
      fontSize: '1.3rem',
    },
    toolbar: {
      width: '100%',
    },
    userName: {
      fontSize: '1.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    appBar: {
      flexDirection: 'column',
    }
    // profile: {
    //   width: '120px',
    //   fontSize: '1rem',
    // },
  }
}));