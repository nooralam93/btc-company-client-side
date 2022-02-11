import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginBg from '../../../images/bannerBg.jpg'

const bgLogin = {
    background: `url(${loginBg})`,
    height: 450,
}

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth()
    // const { signInWithGoogle } = UseFirebase();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        // console.log(field, value)
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container style={bgLogin}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="h5" gutterBottom component="div">LogIn
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="outlined-basic"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            type="Password"
                            variant="outlined" />
                        <br />
                        <Button variant="contained" type="submit">Login</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully</Alert>
                        }
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <div>-------------or----------</div>

                    <Button
                        variant="contained"
                        onClick={handleGoogleSignIn}
                    >Google Sign In</Button>

                </Grid>
            </Grid>

        </Container>
    );
};

export default Login;































/* import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/bannerBg.jpg'

const bgLogin = {
    background: `url(${login})`,
    height: 450,
}

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(field, value)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Don't match your email or password")
        }
        e.preventDefault();
    }
    return (
        <Box style={bgLogin}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="h5" gutterBottom component="div">LogIn
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="outlined-basic"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            type="Password"
                            variant="outlined" />
                        <br />
                        <Button variant="contained" type="submit">Login</Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>


                </Grid>
            </Grid>

        </Box >
    );
};

export default Login; */