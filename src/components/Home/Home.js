import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {Container, Grow, Grid } from "@material-ui/core";
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from '../../styles';


const Home = () => {

    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={10} md={8} lg={8}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} lg={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>  
                </Grid>
            </Container> 
        </Grow>
    )
}

export default Home
