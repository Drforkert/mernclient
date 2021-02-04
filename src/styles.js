import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontSize: 'clamp(1.5rem, 6vw, 2rem)',
  },
  image: {
    marginLeft: '15px',
    border: "3px solid white",
    borderRadius: 15,
  },
  [theme.breakpoints.down('sm')]: {
     mainContainer: {
      flexDirection: 'column-reverse',
    }
  },
  [theme.breakpoints.down('md')]: {
    mainContainer: {
      maxWidth: '100%',
    }
  }
}));