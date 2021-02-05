import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import {signin, signup} from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}



const Auth = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    

    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //error would be cannot get property
        const token = res?.tokenId;
        
        try {
            dispatch({type: 'AUTH', data: {result, token} });

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    const googleFailure = () => {
        console.log("Google anmeldung war nicht möglich")
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon /> 
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                        <>
                            <Input name="firstName" label="Vorname" handleChange={handleChange} autoFocus half/>
                            <Input name="lastName" label="Nachname" handleChange={handleChange} half />
                            
                        </>
                        )} 
                            <Input name="email" label="Email Adress" handleChange={handleChange} type="email"/>
                            
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    &nbsp;
                    <GoogleLogin clientId="1024223132577-vcdkkfks94c5m5dqa2j53posd3b1phfa.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">Google Sign In</Button>
                    )}
                    onSuccess={googleSuccess} onFailure={googleFailure} cookiePolicy="single_host_origin" />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Schon ein Account? Log dich ein :)' : 'kein Account? Registriere dich hier'} 
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
