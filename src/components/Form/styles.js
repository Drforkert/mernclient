import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  warning: {
    fontSize: '2rem',
    fontFamily: 'Poppins',
  },
  alert: {
    fontSize: '1.5rem',
    fontFamily: 'Poppins',
    color:'#fff',
  },
  paperSmall: {
    marginTop: '1rem',
    padding: theme.spacing(4),
    backgroundColor: 'black',
  }
}));