import { makeStyles} from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    padding: '1rem',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,0,0, 1)',
    textDecoration: 'none',
    fontFamily: 'Poppins',
    fontSize: 'clamp(2rem, 5vw, 1.2rem)',
    marginLeft: '2rem',
  },
  image: {
    marginLeft: '2rem',
    border: '3px solid black',
    borderRadius: '5px',
    objectFit: 'cover',
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
  a: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('xs')]: {
    heading: {
      fontSize: '1.3rem',
    },
    toolbar: {
      width: '100%',
      justifyContent: 'center',
    },
    userName: {
      fontSize: '1.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    appBar: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
  }, 
}));