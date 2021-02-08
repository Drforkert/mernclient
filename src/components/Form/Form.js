import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';
    
const Form = ({ currentId, setCurrentId }) => {

    const clear = () => {
        setCurrentId(null);
        setPostData({ title:'', message:'', tags:'', selectedFile:''});
    }

    const [postData, setPostData] = useState({
        title:'', message:'', tags:'', selectedFile:''
    });
    
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null);
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentId === 0) {
            dispatch(createPost({...postData, name: user?.result?.name}));
        } else {
            dispatch(updatePost(currentId , {...postData, name: user?.result?.name}));
            clear();
        }
        
    };
    
    useEffect(() => {
            if(post) setPostData(post);
        }, [post])


    if(!user?.result?.name) {

            return (
            <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.warning} align="center">
                    Meld dich an um deine Erinnerung zu teilen! 
                </Typography> 
                <Paper className={classes.paperSmall}>
                    <Typography variant="h2" className={classes.alert} align="center">
                        Und Posts der anderen zu Liken! :)  
                    </Typography> 
                </Paper>
            </Paper>
            
            )
        };

    return (
        
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Bearbeite' : 'Erstelle'} Eine Erinnerung</Typography>
                <TextField name="title" variant="outlined" label="Titel" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Story" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Post</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear Form</Button>
            </form>
        </Paper>
    )
}

export default Form;
