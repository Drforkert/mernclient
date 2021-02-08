import React, {useState, useEffect} from 'react'
import {AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {Link, useHistory, useLocation} from 'react-router-dom';
import memories from '../../images/memories.jpeg';
import decode from 'jwt-decode';


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({type: 'LOGOUT'});

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
        // eslint-disable-next-line
    }, [location]);
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
           <div className={classes.brandContainer}> 
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Soest</Typography> 
            <img className={classes.image} src={memories} alt="memories" height="60px" width="80px" />
           </div>
           <Toolbar className={classes.toolbar}>
             {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}><a href="/" className={classes.a}>{user.result.name.charAt(0)}</a></Avatar> 
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" size="medium" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
             ) : (
                <Button component={Link} to="/auth" variant="contained" className={classes.logIn} color="primary" >Einloggen</Button>
             )}
           </Toolbar>
        </AppBar>
    )
}

export default Navbar
